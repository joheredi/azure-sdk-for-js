// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "../pathClientTypes";
import { LROMode, LROResult, SendOperationFn } from "./models";

export function createPollingMethod<TResult>(
  sendOperationFn: SendOperationFn,
  args: RequestParameters,
  mode?: LROMode
): (path?: string) => Promise<LROResult<TResult>> {
  /**
   * Polling calls will always return a status object i.e. {"status": "success"}
   * these intermediate responses are not described in the swagger so we need to
   * pass custom mappers at runtime.
   * This function replaces all the existing mappers to be able to deserialize a status object
   * @param responses Original set of responses defined in the operation
   */

  if (mode === "AzureAsync") {
    return async (_path?: string) => {
      return sendOperationFn(args);
    };
  }
  return async (_path?: string) => {
    return sendOperationFn(args);
  };
}

export function createRetrieveAzureAsyncResource<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: RequestParameters
): (path?: string) => Promise<LROResult<TResult>> {
  const updatedArgs = { ...args };
  return createPollingMethod(sendOperationFn, updatedArgs);
}
