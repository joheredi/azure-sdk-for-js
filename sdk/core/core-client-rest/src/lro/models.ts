// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PollOperationState } from "@azure/core-lro";
import { HttpResponse } from "../common";
import { RequestParameters } from "../pathClientTypes";

export type FinalStateVia = "azure-async-operation" | "location" | "original-uri";

export type LROMode = "AzureAsync" | "Location" | "Body";

export interface LROConfig {
  mode?: LROMode;
  resourceLocation?: string;
}

export type SendOperationFn = (args: RequestParameters) => Promise<HttpResponse>;

/**
 * Type of a polling operation state that can actually be resumed.
 */
export type ResumablePollOperationState<T> = PollOperationState<T> & {
  initialRawResponse?: HttpResponse;
  config?: LROConfig;
  pollingURL?: string;
};

export interface PollerConfig {
  intervalInMs: number;
}
