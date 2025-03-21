/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  SavingsPlanGetOptionalParams,
  BillingBenefitsRP
} from "@azure/arm-billingbenefits";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get savings plan.
 *
 * @summary Get savings plan.
 * x-ms-original-file: specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/stable/2022-11-01/examples/SavingsPlanItemGet.json
 */
async function savingsPlanItemGet() {
  const savingsPlanOrderId = "20000000-0000-0000-0000-000000000000";
  const savingsPlanId = "30000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new BillingBenefitsRP(credential);
  const result = await client.savingsPlan.get(
    savingsPlanOrderId,
    savingsPlanId
  );
  console.log(result);
}

savingsPlanItemGet().catch(console.error);

/**
 * This sample demonstrates how to Get savings plan.
 *
 * @summary Get savings plan.
 * x-ms-original-file: specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/stable/2022-11-01/examples/SavingsPlanItemExpandedGet.json
 */
async function savingsPlanItemWithExpandedRenewPropertiesGet() {
  const savingsPlanOrderId = "20000000-0000-0000-0000-000000000000";
  const savingsPlanId = "30000000-0000-0000-0000-000000000000";
  const expand = "renewProperties";
  const options: SavingsPlanGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new BillingBenefitsRP(credential);
  const result = await client.savingsPlan.get(
    savingsPlanOrderId,
    savingsPlanId,
    options
  );
  console.log(result);
}

savingsPlanItemWithExpandedRenewPropertiesGet().catch(console.error);
