/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get metric status
 *
 * @summary Get metric status
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2023-04-27/examples/Monitors_GetMetricStatus_MaximumSet_Gen.json
 */
async function monitorsGetMetricStatusMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] || "nqmcgifgaqlf";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "rgDynatrace";
  const monitorName = "fhcjxnxumkdlgpwanewtkdnyuz";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.getMetricStatus(
    resourceGroupName,
    monitorName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get metric status
 *
 * @summary Get metric status
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2023-04-27/examples/Monitors_GetMetricStatus_MinimumSet_Gen.json
 */
async function monitorsGetMetricStatusMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] || "nqmcgifgaqlf";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "rgDynatrace";
  const monitorName = "fhcjxnxumkdlgpwanewtkdnyuz";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.getMetricStatus(
    resourceGroupName,
    monitorName
  );
  console.log(result);
}

async function main(): Promise<void> {
  monitorsGetMetricStatusMaximumSetGen();
  monitorsGetMetricStatusMinimumSetGen();
}

main().catch(console.error);
