/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AzureBackupRecoveryPointResource,
  RecoveryPointsListOptionalParams,
  RecoveryPointsGetOptionalParams,
  RecoveryPointsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecoveryPoints. */
export interface RecoveryPoints {
  /**
   * Returns a list of Recovery Points for a DataSource in a vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: RecoveryPointsListOptionalParams,
  ): PagedAsyncIterableIterator<AzureBackupRecoveryPointResource>;
  /**
   * Gets a Recovery Point using recoveryPointId for a Datasource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance.
   * @param recoveryPointId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    recoveryPointId: string,
    options?: RecoveryPointsGetOptionalParams,
  ): Promise<RecoveryPointsGetResponse>;
}
