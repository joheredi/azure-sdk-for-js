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
import PurviewCatalog from "@azure-rest/purview-catalog";
import { DefaultAzureCredential } from "@azure/identity";
dotenv.config();

const accountName = process.env["ACCOUNT_NAME"] || "document-translator endpoint";

export async function main() {
  console.log("== List Purview Catalog glosaries sample ==");
  const catalog = PurviewCatalog(accountName, new DefaultAzureCredential());
  const glosaries = await catalog.path("/atlas/v2/glossary").get();
  console.log(glosaries.body.map((g) => g.name).join("\n"));
  const glosary = await catalog.path("/glossary/name/{glossaryName}/terms", "Glossary").get();
  console.log(glosary.status);
}

main().catch((err) => {
  console.error(err);
});
