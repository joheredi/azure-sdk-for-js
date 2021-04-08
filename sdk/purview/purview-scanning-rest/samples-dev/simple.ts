// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to make a simple call to the Azure Purview Catakig
 * service to get a list of gloraries
 *
 * @summary gets a list of glosaries
 * @azsdk-weight 40
 */

import * as dotenv from "dotenv";
import PurviewScanning from "@azure-rest/purview-scanning";
import { DefaultAzureCredential } from "@azure/identity";
dotenv.config();

const accountName = process.env["ACCOUNT_NAME"] || "document-translator endpoint";

export async function main() {
  console.log("== List Purview Catalog glosaries sample ==");
  const catalog = PurviewScanning(accountName, new DefaultAzureCredential());
  const dataSources = await catalog.path("/datasources").get();
  if (dataSources.status !== "200") {
    throw dataSources.body.error;
  }

  for (const dataSource of dataSources.body.value || []) {
    if (!dataSource.name) {
      continue;
    }

    const collection = await catalog.path("/datasources/{dataSourceName}", dataSource.name).get();

    if (collection.status !== "200") {
      throw collection.body.error;
    }

    console.log(`${dataSource.name}: ${dataSource.id}`);
  }
}

main().catch((err) => {
  console.error(err);
});
