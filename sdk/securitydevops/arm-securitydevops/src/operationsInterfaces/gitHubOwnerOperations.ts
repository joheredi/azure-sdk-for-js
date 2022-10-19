/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GitHubOwner,
  GitHubOwnerListOptionalParams,
  GitHubOwnerGetOptionalParams,
  GitHubOwnerGetResponse,
  GitHubOwnerCreateOrUpdateOptionalParams,
  GitHubOwnerCreateOrUpdateResponse,
  GitHubOwnerUpdateOptionalParams,
  GitHubOwnerUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GitHubOwnerOperations. */
export interface GitHubOwnerOperations {
  /**
   * Returns a list of monitored GitHub owners.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubOwnerListOptionalParams
  ): PagedAsyncIterableIterator<GitHubOwner>;
  /**
   * Returns a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerGetOptionalParams
  ): Promise<GitHubOwnerGetResponse>;
  /**
   * Create or update a monitored GitHub owner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubOwner Github owner.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubOwner: GitHubOwner,
    options?: GitHubOwnerCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubOwnerCreateOrUpdateResponse>,
      GitHubOwnerCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a monitored GitHub owner.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubOwner Github owner.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubOwner: GitHubOwner,
    options?: GitHubOwnerCreateOrUpdateOptionalParams
  ): Promise<GitHubOwnerCreateOrUpdateResponse>;
  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubOwnerUpdateResponse>,
      GitHubOwnerUpdateResponse
    >
  >;
  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubOwnerUpdateOptionalParams
  ): Promise<GitHubOwnerUpdateResponse>;
}