// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TableClient, TableEntity } from "../../src";
import { assert } from "chai";
import { record, Recorder } from "@azure/test-utils-recorder";

import * as dotenv from "dotenv";
dotenv.config();

const mockAccountName = "fakestorageaccount";
const mockAccountKey = "aaaaa";
const connectionString = process.env["STORAGE_CONNECTION_STRING"] || "";
const recorderEnvSetup = {
  replaceableVariables: {
    STORAGE_CONNECTION_STRING: `DefaultEndpointsProtocol=https;AccountName=${mockAccountName};AccountKey=${mockAccountKey};EndpointSuffix=core.windows.net`
  },
  customizationsOnRecordings: [
    // Used in record mode
    // Array of callback functions can be provided to customize the generated recordings in record mode
    // `sig` param of SAS Token is being filtered here
    (recording: string): string => recording
  ],
  // SAS token may contain sensitive information
  queryParametersToSkip: [
    // Used in record and playback modes
    "se",
    "sig",
    "sp",
    "spr",
    "srt",
    "ss",
    "st",
    "sv"
  ]
};

describe("TableClient", () => {
  let client: TableClient;
  let recorder: Recorder;

  beforeEach(function() {
    recorder = record(this, recorderEnvSetup);
    const tableName = "integration";
    client = TableClient.fromConnectionString(connectionString, tableName);
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("should createEntity with only primitives", async () => {
    const testEntity: TableEntity<{ name: string }> = {
      PartitionKey: "P1",
      RowKey: "R1",
      name: "testEntity"
    };
    const result = await client.createEntity(testEntity, {});

    assert.equal(result.PartitionKey, testEntity.PartitionKey);
    assert.equal(result.RowKey, testEntity.RowKey);
    assert.equal(result.name, testEntity.name);
  });
});
