// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PipelineResponse,
  PipelineRequest,
  SendRequest,
  PipelinePolicy
} from "@azure/core-rest-pipeline";
import { SASCredential } from "@azure/core-auth";
import { URL } from "./utils/url";

/**
 * The programmatic identifier of the tablesSASKeyCredentialPolicy.
 */
export const tablesSASKeyCredentialPolicyName = "tablesSASKeyCredentialPolicy";

/**
 * tablesSASKeyCredentialPolicy is a policy used to sign HTTP request with a shared key.
 */
export function tablesSASKeyCredentialPolicy(credential: SASCredential): PipelinePolicy {
  return {
    name: tablesSASKeyCredentialPolicyName,
    async sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      const url = signUrlWithSAS(request.url, credential);
      request.url = url;
      return next(request);
    }
  };
}

export function signUrlWithSAS(url: string, credential: SASCredential): string {
  const parsedUrl = new URL(url);
  let signature = credential.signature;

  if (signature.startsWith("?")) {
    signature = signature.substr(1, signature.length);
  }

  if (parsedUrl.search) {
    parsedUrl.search = `${parsedUrl.search}&${signature}`;
  } else {
    parsedUrl.search = `?${signature}`;
  }

  return parsedUrl.toString();
}
