/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GitHubRepoOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSecurityDevOps } from "../microsoftSecurityDevOps";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  GitHubRepo,
  GitHubRepoListByConnectorNextOptionalParams,
  GitHubRepoListByConnectorOptionalParams,
  GitHubRepoListNextOptionalParams,
  GitHubRepoListOptionalParams,
  GitHubRepoListByConnectorResponse,
  GitHubRepoListOperationResponse,
  GitHubRepoGetOptionalParams,
  GitHubRepoGetResponse,
  GitHubRepoCreateOrUpdateOptionalParams,
  GitHubRepoCreateOrUpdateResponse,
  GitHubRepoUpdateOptionalParams,
  GitHubRepoUpdateResponse,
  GitHubRepoListByConnectorNextResponse,
  GitHubRepoListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GitHubRepoOperations operations. */
export class GitHubRepoOperationsImpl implements GitHubRepoOperations {
  private readonly client: MicrosoftSecurityDevOps;

  /**
   * Initialize a new instance of the class GitHubRepoOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSecurityDevOps) {
    this.client = client;
  }

  /**
   * Returns a list of monitored GitHub repositories.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param options The options parameters.
   */
  public listByConnector(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubRepoListByConnectorOptionalParams
  ): PagedAsyncIterableIterator<GitHubRepo> {
    const iter = this.listByConnectorPagingAll(
      resourceGroupName,
      gitHubConnectorName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByConnectorPagingPage(
          resourceGroupName,
          gitHubConnectorName,
          options
        );
      }
    };
  }

  private async *listByConnectorPagingPage(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubRepoListByConnectorOptionalParams
  ): AsyncIterableIterator<GitHubRepo[]> {
    let result = await this._listByConnector(
      resourceGroupName,
      gitHubConnectorName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByConnectorNext(
        resourceGroupName,
        gitHubConnectorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByConnectorPagingAll(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubRepoListByConnectorOptionalParams
  ): AsyncIterableIterator<GitHubRepo> {
    for await (const page of this.listByConnectorPagingPage(
      resourceGroupName,
      gitHubConnectorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of monitored GitHub repositories.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubRepoListOptionalParams
  ): PagedAsyncIterableIterator<GitHubRepo> {
    const iter = this.listPagingAll(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          gitHubConnectorName,
          gitHubOwnerName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubRepoListOptionalParams
  ): AsyncIterableIterator<GitHubRepo[]> {
    let result = await this._list(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        gitHubConnectorName,
        gitHubOwnerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubRepoListOptionalParams
  ): AsyncIterableIterator<GitHubRepo> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of monitored GitHub repositories.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param options The options parameters.
   */
  private _listByConnector(
    resourceGroupName: string,
    gitHubConnectorName: string,
    options?: GitHubRepoListByConnectorOptionalParams
  ): Promise<GitHubRepoListByConnectorResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, options },
      listByConnectorOperationSpec
    );
  }

  /**
   * Returns a list of monitored GitHub repositories.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    options?: GitHubRepoListOptionalParams
  ): Promise<GitHubRepoListOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, gitHubOwnerName, options },
      listOperationSpec
    );
  }

  /**
   * Returns a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubRepoName Name of the GitHub Repo.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubRepoName: string,
    options?: GitHubRepoGetOptionalParams
  ): Promise<GitHubRepoGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gitHubConnectorName,
        gitHubOwnerName,
        gitHubRepoName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubRepoName Name of the GitHub Repo.
   * @param gitHubRepo Github repo.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubRepoName: string,
    gitHubRepo: GitHubRepo,
    options?: GitHubRepoCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubRepoCreateOrUpdateResponse>,
      GitHubRepoCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GitHubRepoCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        gitHubConnectorName,
        gitHubOwnerName,
        gitHubRepoName,
        gitHubRepo,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubRepoName Name of the GitHub Repo.
   * @param gitHubRepo Github repo.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubRepoName: string,
    gitHubRepo: GitHubRepo,
    options?: GitHubRepoCreateOrUpdateOptionalParams
  ): Promise<GitHubRepoCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      gitHubRepoName,
      gitHubRepo,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubRepoName Name of the GitHub Repo.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubRepoName: string,
    options?: GitHubRepoUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GitHubRepoUpdateResponse>,
      GitHubRepoUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GitHubRepoUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        gitHubConnectorName,
        gitHubOwnerName,
        gitHubRepoName,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch a monitored GitHub repository.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param gitHubRepoName Name of the GitHub Repo.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    gitHubRepoName: string,
    options?: GitHubRepoUpdateOptionalParams
  ): Promise<GitHubRepoUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      gitHubConnectorName,
      gitHubOwnerName,
      gitHubRepoName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByConnectorNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param nextLink The nextLink from the previous successful call to the ListByConnector method.
   * @param options The options parameters.
   */
  private _listByConnectorNext(
    resourceGroupName: string,
    gitHubConnectorName: string,
    nextLink: string,
    options?: GitHubRepoListByConnectorNextOptionalParams
  ): Promise<GitHubRepoListByConnectorNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gitHubConnectorName, nextLink, options },
      listByConnectorNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gitHubConnectorName Name of the GitHub Connector.
   * @param gitHubOwnerName Name of the GitHub Owner.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    gitHubConnectorName: string,
    gitHubOwnerName: string,
    nextLink: string,
    options?: GitHubRepoListNextOptionalParams
  ): Promise<GitHubRepoListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gitHubConnectorName,
        gitHubOwnerName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByConnectorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/repos",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepoListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}/repos",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepoListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}/repos/{gitHubRepoName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName,
    Parameters.gitHubRepoName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}/repos/{gitHubRepoName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepo
    },
    201: {
      bodyMapper: Mappers.GitHubRepo
    },
    202: {
      bodyMapper: Mappers.GitHubRepo
    },
    204: {
      bodyMapper: Mappers.GitHubRepo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.gitHubRepo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName,
    Parameters.gitHubRepoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecurityDevOps/gitHubConnectors/{gitHubConnectorName}/owners/{gitHubOwnerName}/repos/{gitHubRepoName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepo
    },
    201: {
      bodyMapper: Mappers.GitHubRepo
    },
    202: {
      bodyMapper: Mappers.GitHubRepo
    },
    204: {
      bodyMapper: Mappers.GitHubRepo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.gitHubRepo1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName,
    Parameters.gitHubRepoName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByConnectorNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepoListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.gitHubConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitHubRepoListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.gitHubConnectorName,
    Parameters.gitHubOwnerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};