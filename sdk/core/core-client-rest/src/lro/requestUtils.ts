// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpMethods } from "@azure/core-rest-pipeline";
import { HttpResponse } from "../common";
import { LROConfig } from "./models";
import { terminalStates } from "./stateMachine";

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final LRO response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLRO(finalStateVia?: string) {
  let initialOperationInfo: LROResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: HttpResponse) => {
    const status = Number.parseInt(response.status);
    if (status < 200 || status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLROData(response);
    } else {
      isInitialRequest = false;
    }

    if (initialOperationInfo.azureAsyncOperation || initialOperationInfo.operationLocation) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(response, initialOperationInfo, finalStateVia)
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

interface AsyncoperationResponse extends Record<string, unknown> {
  status?: string;
}

function isAsyncOperationFinalResponse(
  response: HttpResponse,
  initialOperationInfo: LROResponseInfo,
  finalStateVia?: string
): boolean {
  const status: string = (response.body as AsyncoperationResponse).status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    finalStateVia &&
    finalStateVia.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (initialOperationInfo.requestMethod !== "PUT" && !initialOperationInfo.location) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: HttpResponse): boolean {
  return response.status !== "202";
}

interface BodyPollingResponse extends Record<string, unknown> {
  provisioningState?: string;
}
function isBodyPollingFinalResponse(response: HttpResponse): boolean {
  const provisioningState: string =
    (response.body as BodyPollingResponse).provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LROResponseInfo {
  requestMethod: string;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLROData(result: HttpResponse): LROResponseInfo {
  return {
    azureAsyncOperation: result.headers["azure-asyncoperation"],
    operationLocation: result.headers["operation-location"],
    location: result.headers["location"],
    requestMethod: result.request.method,
  };
}

/**
 * Detects where the continuation token is and returns it. Notice that azure-asyncoperation
 * must be checked first before the other location headers because there are scenarios
 * where both azure-asyncoperation and location could be present in the same response but
 * azure-asyncoperation should be the one to use for polling.
 */
export function getPollingURL(rawResponse: HttpResponse, defaultPath: string): string {
  return (
    getAzureAsyncoperation(rawResponse) ??
    getLocation(rawResponse) ??
    getOperationLocation(rawResponse) ??
    defaultPath
  );
}

function getLocation(rawResponse: HttpResponse): string | undefined {
  return rawResponse.headers["location"];
}

function getOperationLocation(rawResponse: HttpResponse): string | undefined {
  return rawResponse.headers["operation-location"];
}

function getAzureAsyncoperation(rawResponse: HttpResponse): string | undefined {
  return rawResponse.headers["azure-asyncoperation"];
}

export function inferLROMode(
  path: string,
  originalMethod: HttpMethods,
  rawResponse: HttpResponse
): LROConfig {
  const requestMethod = originalMethod;
  if (getAzureAsyncoperation(rawResponse) !== undefined) {
    return {
      mode: "AzureAsync",
      resourceLocation:
        requestMethod === "PUT"
          ? path
          : requestMethod === "POST"
          ? getLocation(rawResponse)
          : undefined,
    };
  } else if (
    getLocation(rawResponse) !== undefined ||
    getOperationLocation(rawResponse) !== undefined
  ) {
    return {
      mode: "Location",
    };
  } else if (["PUT", "PATCH"].includes(requestMethod)) {
    return {
      mode: "Body",
    };
  }
  return {};
}
