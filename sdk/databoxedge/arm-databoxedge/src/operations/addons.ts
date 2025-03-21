/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Addons } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DataBoxEdgeManagementClient } from "../dataBoxEdgeManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  AddonUnion,
  AddonsListByRoleNextOptionalParams,
  AddonsListByRoleOptionalParams,
  AddonsListByRoleResponse,
  AddonsGetOptionalParams,
  AddonsGetResponse,
  AddonsCreateOrUpdateOptionalParams,
  AddonsCreateOrUpdateResponse,
  AddonsDeleteOptionalParams,
  AddonsListByRoleNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Addons operations. */
export class AddonsImpl implements Addons {
  private readonly client: DataBoxEdgeManagementClient;

  /**
   * Initialize a new instance of the class Addons class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxEdgeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the addons configured in the role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByRole(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: AddonsListByRoleOptionalParams
  ): PagedAsyncIterableIterator<AddonUnion> {
    const iter = this.listByRolePagingAll(
      deviceName,
      roleName,
      resourceGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByRolePagingPage(
          deviceName,
          roleName,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByRolePagingPage(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: AddonsListByRoleOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AddonUnion[]> {
    let result: AddonsListByRoleResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRole(
        deviceName,
        roleName,
        resourceGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRoleNext(
        deviceName,
        roleName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRolePagingAll(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: AddonsListByRoleOptionalParams
  ): AsyncIterableIterator<AddonUnion> {
    for await (const page of this.listByRolePagingPage(
      deviceName,
      roleName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the addons configured in the role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByRole(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: AddonsListByRoleOptionalParams
  ): Promise<AddonsListByRoleResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, resourceGroupName, options },
      listByRoleOperationSpec
    );
  }

  /**
   * Gets a specific addon by name.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param addonName The addon name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    roleName: string,
    addonName: string,
    resourceGroupName: string,
    options?: AddonsGetOptionalParams
  ): Promise<AddonsGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, addonName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a addon.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param addonName The addon name.
   * @param resourceGroupName The resource group name.
   * @param addon The addon properties.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    roleName: string,
    addonName: string,
    resourceGroupName: string,
    addon: AddonUnion,
    options?: AddonsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AddonsCreateOrUpdateResponse>,
      AddonsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AddonsCreateOrUpdateResponse> => {
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
      { deviceName, roleName, addonName, resourceGroupName, addon, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a addon.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param addonName The addon name.
   * @param resourceGroupName The resource group name.
   * @param addon The addon properties.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    roleName: string,
    addonName: string,
    resourceGroupName: string,
    addon: AddonUnion,
    options?: AddonsCreateOrUpdateOptionalParams
  ): Promise<AddonsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      roleName,
      addonName,
      resourceGroupName,
      addon,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the addon on the device.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param addonName The addon name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    roleName: string,
    addonName: string,
    resourceGroupName: string,
    options?: AddonsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { deviceName, roleName, addonName, resourceGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the addon on the device.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param addonName The addon name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    roleName: string,
    addonName: string,
    resourceGroupName: string,
    options?: AddonsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      roleName,
      addonName,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByRoleNext
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByRole method.
   * @param options The options parameters.
   */
  private _listByRoleNext(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: AddonsListByRoleNextOptionalParams
  ): Promise<AddonsListByRoleNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, resourceGroupName, nextLink, options },
      listByRoleNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByRoleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AddonList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Addon
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName,
    Parameters.addonName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Addon
    },
    201: {
      bodyMapper: Mappers.Addon
    },
    202: {
      bodyMapper: Mappers.Addon
    },
    204: {
      bodyMapper: Mappers.Addon
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.addon,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName,
    Parameters.addonName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/addons/{addonName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName,
    Parameters.addonName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByRoleNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AddonList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
