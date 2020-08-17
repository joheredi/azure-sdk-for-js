// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TableClient, TableEntity, Edm } from "../../src";
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

                          describe("createEntity", () => {
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

                            it("should createEntity with Date", async () => {
                              const testDate = new Date(2020, 8, 17);
                              const testEntity: TableEntity<{ testDate: Date }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testDate
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.deepEqual(result.testDate, testDate);
                            });

                            it("should createEntity with Guid", async () => {
                              const testGuid: Edm<"Guid"> = {
                               value: "cf8ef051-1b7d-4e93-a1e5-a3944d7e441c",
                                type: "Guid"
                              };
                              const testEntity: TableEntity<{ testGuid: Edm<"Guid"> }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testGuid
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.deepEqual(result.testGuid, testGuid);
                            });

                            it("should createEntity with Int64", async () => {
                              const testInt64: Edm<"Int64"> = {
                               value: "12345543221",
                                type: "Int64"
                              };
                              const testEntity: TableEntity<{ testInt64: Edm<"Int64"> }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testInt64
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.deepEqual(result.testInt64, testInt64);
                            });

                            it("should createEntity with Int32", async () => {
                              const testInt32: Edm<"Int32"> = {value: 123, type: "Int32" };
                              const testEntity: TableEntity<{ testInt32: Edm<"Int32"> }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testInt32
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.deepEqual(result.testInt32, testInt32);
                            });

                            it("should createEntity with Boolean", async () => {
                              const testBoolean: Edm<"Boolean"> = {value: true, type: "Boolean" };
                              // Check this API interaction!
                              const testEntity: TableEntity<{
                                testBoolean: Edm<"Boolean"> | boolean;
                              }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testBoolean
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.equal(result.testBoolean, true);
                            });

                            it("should createEntity with DateTime", async () => {
                              const testDate = new Date(2020, 8, 17);
                              const testDateTime: Edm<"DateTime"> = {
                               value: testDate,
                                type: "DateTime"
                              };
                              // Check this API interaction!
                              const testEntity: TableEntity<{
                                testDateTime: Edm<"DateTime"> | Date;
                              }> = {
                                PartitionKey: "P2",
                                RowKey: "R2",
                                testDateTime
                              };
                              const result = await client.createEntity(testEntity, {});

                              assert.equal(result.PartitionKey, testEntity.PartitionKey);
                              assert.equal(result.RowKey, testEntity.RowKey);
                              assert.equal(result.testDateTime, testDate);
                            });
                          });
                        };);
