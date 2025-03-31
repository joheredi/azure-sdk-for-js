// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  HttpClient,
  HttpMethods,
  PipelineRequest,
  PipelineResponse,
} from "../interfaces.js";
import { isRestError } from "../restError.js";
import type { Pipeline } from "../pipeline.js";
import { createPipelineRequest } from "../pipelineRequest.js";
import { getCachedDefaultHttpsClient } from "./clientHelpers.js";
import type { RequestOptions } from "./common.js";

/**
 * Helper function to send request used by the client
 * @param method - method to use to send the request
 * @param url - url to send the request to
 * @param pipeline - pipeline with the policies to run when sending the request
 * @param options - request options
 * @param customHttpClient - a custom HttpClient to use when making the request
 * @returns returns and HttpResponse
 */
export async function sendRequest(
  method: HttpMethods,
  url: string,
  pipeline: Pipeline,
  options: RequestOptions = {},
  customHttpClient?: HttpClient,
): Promise<PipelineResponse> {
  const httpClient = customHttpClient ?? getCachedDefaultHttpsClient();
  const request = buildPipelineRequest(method, url, options);

  try {
    const response = await pipeline.sendRequest(httpClient, request);

    if (options?.onResponse) {
      options.onResponse(response);
    }

    return response;
  } catch (e: unknown) {
    if (isRestError(e) && e.response && options.onResponse) {
      options?.onResponse(e.response, e);
    }

    throw e;
  }
}

function buildPipelineRequest(
  method: HttpMethods,
  url: string,
  options: RequestOptions = {},
): PipelineRequest {

  return createPipelineRequest({
    url,
    method,
    ...options,
    body: options.body,
  });
}
