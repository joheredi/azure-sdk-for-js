// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/// <reference lib="esnext.asynciterable" />
import type {
  DynamicAlphaIdConfiguration,
  GetConfigurationOptions,
  UpsertConfigurationOptions,
  ListAlphaIdsOptions,
  GetDynamicAlphaIdCountriesOptions,
  GetPreRegisteredAlphaIdCountriesOptions,
  AlphaId,
  SupportedCountries,
} from "./models.js";
import { isKeyCredential, parseClientArguments } from "@azure/communication-common";
import type { KeyCredential, TokenCredential } from "@azure/core-auth";
import { isTokenCredential } from "@azure/core-auth";
import type { CommonClientOptions, InternalClientPipelineOptions } from "@azure/core-client";
import { AlphaIDsClient as AlphaIDsGeneratedClient } from "./generated/src/index.js";
import { createCommunicationAuthPolicy } from "@azure/communication-common";
import { logger } from "./utils/index.js";
import { tracingClient } from "./generated/src/tracing.js";
import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import { createAlphaIDsPagingPolicy } from "./utils/customPipelinePolicies.js";

/**
 * Client options used to configure the AlphaIdsClient API requests.
 */
export interface AlphaIdsClientOptions extends CommonClientOptions {}

const isAlphaIdsClientOptions = (options: any): options is AlphaIdsClientOptions =>
  options && !isKeyCredential(options) && !isTokenCredential(options);

export class AlphaIdsClient {
  /**
   * A reference to the auto-generated AlphaIDs HTTP client.
   */
  private readonly client: AlphaIDsGeneratedClient;

  public constructor(connectionString: string, options?: AlphaIdsClientOptions);

  public constructor(endpoint: string, credential: KeyCredential, options?: AlphaIdsClientOptions);

  public constructor(
    endpoint: string,
    credential: TokenCredential,
    options?: AlphaIdsClientOptions,
  );

  public constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: KeyCredential | TokenCredential | AlphaIdsClientOptions,
    maybeOptions: AlphaIdsClientOptions = {},
  ) {
    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const options = isAlphaIdsClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;

    const internalPipelineOptions: InternalClientPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info,
        },
      },
    };

    this.client = new AlphaIDsGeneratedClient(url, internalPipelineOptions);
    const authPolicy = createCommunicationAuthPolicy(credential);
    this.client.pipeline.addPolicy(authPolicy);
    // This policy is a temporary workarounds to address compatibility issues with Azure Core V2.
    const alphaIDsPagingPolicy = createAlphaIDsPagingPolicy(url);
    this.client.pipeline.addPolicy(alphaIDsPagingPolicy);
  }

  public getDynamicAlphaIdConfiguration(
    // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
    options: GetConfigurationOptions = {},
  ): Promise<DynamicAlphaIdConfiguration> {
    return tracingClient.withSpan(
      "AlphaIdsClient-getConfiguration",
      options,
      async (updatedOptions) => {
        return this.client.alphaIds.getDynamicAlphaIdConfiguration(updatedOptions);
      },
    );
  }

  public upsertDynamicAlphaIdConfiguration(
    enabled: boolean,
    // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
    options: UpsertConfigurationOptions = {},
  ): Promise<DynamicAlphaIdConfiguration> {
    return tracingClient.withSpan(
      "AlphaIdsClient-upsertConfiguration",
      options,
      async (updatedOptions) => {
        return this.client.alphaIds.upsertDynamicAlphaIdConfiguration(enabled, updatedOptions);
      },
    );
  }

  // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
  public getAlphaIds(options: ListAlphaIdsOptions = {}): PagedAsyncIterableIterator<AlphaId> {
    const { span, updatedOptions } = tracingClient.startSpan(
      "AlphaIdsClient-listAlphaIds",
      options,
    );
    try {
      return this.client.alphaIds.listAlphaIds(updatedOptions);
    } catch (e: any) {
      span.setStatus({
        status: "error",
        error: e,
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public getDynamicAlphaIdCountries(
    options: GetDynamicAlphaIdCountriesOptions = {},
  ): Promise<SupportedCountries> {
    const { span, updatedOptions } = tracingClient.startSpan(
      "AlphaIdsClient-getDynamicAlphaIdCountries",
      options,
    );
    try {
      return this.client.alphaIds.getDynamicAlphaIdCountries(updatedOptions);
    } catch (e: any) {
      span.setStatus({
        status: "error",
        error: e,
      });
      throw e;
    } finally {
      span.end();
    }
  }

  public getPreRegisteredAlphaIdCountries(
    options: GetPreRegisteredAlphaIdCountriesOptions = {},
  ): Promise<SupportedCountries> {
    const { span, updatedOptions } = tracingClient.startSpan(
      "AlphaIdsClient-getPreRegisteredAlphaIdCountries",
      options,
    );
    try {
      return this.client.alphaIds.getPreRegisteredAlphaIdCountries(updatedOptions);
    } catch (e: any) {
      span.setStatus({
        status: "error",
        error: e,
      });
      throw e;
    } finally {
      span.end();
    }
  }
}
