// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "../common";
import { FinalStateVia, LROResult } from "./models";
import { failureStates, LROState, successStates } from "./stateMachine";

interface AsyncOperationResponse extends Record<string, unknown> {
  status?: string;
}
function getResponseStatus(rawResponse: HttpResponse): string {
  const { status } = (rawResponse.body as AsyncOperationResponse) ?? {};
  return status?.toLowerCase() ?? "succeeded";
}

function isAzureAsyncPollingDone(rawResponse: HttpResponse) {
  const state = getResponseStatus(rawResponse);
  if (failureStates.includes(state)) {
    throw new Error(`Operation status: ${state}`);
  }
  return successStates.includes(state);
}

export function processAzureAsyncOperationResult<TResult>(
  restrieveResource: (path?: string) => Promise<LROResult<TResult>>,
  resourceLocation?: string,
  finalStateVia?: FinalStateVia
): (rawResponse: HttpResponse) => LROState<TResult> {
  return (rawResponse: HttpResponse): LROState<TResult> => {
    if (isAzureAsyncPollingDone(rawResponse)) {
      if (resourceLocation === undefined) {
        return { rawResponse, done: true };
      } else {
        return {
          rawResponse,
          done: false,
          next: async () => {
            async function sendFinalRequest(): Promise<LROResult<TResult> | undefined> {
              switch (finalStateVia) {
                case "original-uri":
                  return restrieveResource();
                case "azure-async-operation":
                  return Promise.resolve(undefined);
                case "location":
                default:
                  return restrieveResource(resourceLocation);
              }
            }
            const finalResponse = await sendFinalRequest();
            return {
              ...(finalResponse ?? {
                rawResponse,
              }),
              done: true,
            };
          },
        };
      }
    }
    return {
      rawResponse,
      done: false,
    };
  };
}
