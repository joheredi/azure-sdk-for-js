/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StopVirtualMachineOptions } from "@azure/arm-scvmm";
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to power off (stop) a virtual machine instance.
 *
 * @summary The operation to power off (stop) a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Stop_MaximumSet_Gen.json
 */
async function virtualMachineInstancesStopMaximumSet(): Promise<void> {
  const resourceUri = "gtgclehcbsyave";
  const body: StopVirtualMachineOptions = { skipShutdown: "true" };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result = await client.virtualMachineInstances.beginStopAndWait(resourceUri, body);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to power off (stop) a virtual machine instance.
 *
 * @summary The operation to power off (stop) a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Stop_MinimumSet_Gen.json
 */
async function virtualMachineInstancesStopMinimumSet(): Promise<void> {
  const resourceUri = "gtgclehcbsyave";
  const body: StopVirtualMachineOptions = {};
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result = await client.virtualMachineInstances.beginStopAndWait(resourceUri, body);
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineInstancesStopMaximumSet();
  await virtualMachineInstancesStopMinimumSet();
}

main().catch(console.error);
