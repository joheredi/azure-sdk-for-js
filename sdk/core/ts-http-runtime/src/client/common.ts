// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  PipelineResponse,
  TransferProgressEvent,
  RawHttpHeadersInput,
  HttpHeaders,
  RequestBodyType,
} from "../interfaces.js";
import type { PipelinePolicy } from "../pipeline.js";

/**
 * Shape of the default request parameters, this may be overridden by the specific
 * request types to provide strong types
 */
export type RequestOptions = {
  /**
   * Headers to send along with the request
   */
  headers?: HttpHeaders;

  /**
   * Body to send with the request
   */
  body?: RequestBodyType;
  /** Set to true if the request is sent over HTTP instead of HTTPS */
  allowInsecureConnection?: boolean;
  /**
   * The number of milliseconds a request can take before automatically being terminated.
   */
  timeout?: number;

  /**
   * Callback which fires upon upload progress.
   */
  onUploadProgress?: (progress: TransferProgressEvent) => void;

  /**
   * Callback which fires upon download progress.
   */
  onDownloadProgress?: (progress: TransferProgressEvent) => void;

  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignal;

  /**
   * A function to be called each time a response is received from the server
   * while performing the requested operation.
   * May be called multiple times.
   */
  onResponse?: RawResponseCallback;
};

/**
 * A function to be called each time a response is received from the server
 * while performing the requested operation.
 * May be called multiple times.
 */
// UNBRANDED DIFFERENCE: onResponse callback does not have a second __legacyError parameter which was provided for backwards compatibility
export type RawResponseCallback = (rawResponse: PipelineResponse, error?: unknown) => void;

/**
 * The base options type for all operations.
 */
export interface OperationOptions {
  /**
   * The signal which can be used to abort requests.
   */
  abortSignal?: AbortSignal;
  /**
   * Options used when creating and sending HTTP requests for this operation.
   */
  requestOptions?: OperationRequestOptions;
  /**
   * A function to be called each time a response is received from the server
   * while performing the requested operation.
   * May be called multiple times.
   */
  onResponse?: RawResponseCallback;
}

/**
 * Options used when creating and sending HTTP requests for this operation.
 */
export interface OperationRequestOptions {
  /**
   * User defined custom request headers that
   * will be applied before the request is sent.
   */
  headers?: RawHttpHeadersInput;

  /**
   * The number of milliseconds a request can take before automatically being terminated.
   */
  timeout?: number;

  /**
   * Callback which fires upon upload progress.
   */
  onUploadProgress?: (progress: TransferProgressEvent) => void;

  /**
   * Callback which fires upon download progress.
   */
  onDownloadProgress?: (progress: TransferProgressEvent) => void;

  /**
   * Set to true if the request is sent over HTTP instead of HTTPS
   */
  allowInsecureConnection?: boolean;
}


/**
 * Used to configure additional policies added to the pipeline at construction.
 */
export interface AdditionalPolicyConfig {
  /**
   * A policy to be added.
   */
  policy: PipelinePolicy;
  /**
   * Determines if this policy be applied before or after retry logic.
   * Only use `perRetry` if you need to modify the request again
   * each time the operation is retried due to retryable service
   * issues.
   */
  position: "perCall" | "perRetry";
}


/** A response containing error details. */
export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
}

/** The error object. */
export interface ErrorModel {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModel>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerError;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerError {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerError;
}
