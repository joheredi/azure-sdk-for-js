// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Context, Suite } from "mocha";
import {
  KnownRouteType,
  KnownTravelMode,
  LatLon,
  RouteDirectionParameters,
  RouteDirectionsRequest,
  RouteMatrixQuery,
} from "../../src";
import { Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { assert, use as chaiUse } from "chai";
import { createClient, createRecorder, testLogger } from "./utils/createClient";
import { MapsRouteClient } from "src/mapsRouteClient";
import chaiPromises from "chai-as-promised";
chaiUse(chaiPromises);

describe("Endpoint can be overwritten", function (this: Suite) {
  let recorder: Recorder;
  const fastTimeout = 10000;

  beforeEach(async function (this: Context) {
    testLogger.verbose(`Recorder: starting...`);
    recorder = await createRecorder(this);
  });

  afterEach(async function () {
    testLogger.verbose(`Recorder: stopping...`);
    await recorder.stop();
  });

  before(function (this: Context) {
    this.timeout(fastTimeout);
  });

  it("should be executed without specifying endpoint", async function () {
    const client = createClient(recorder.configureClientOptions({}));
    const routePoints: LatLon[] = [
      [52.50931, 13.42936],
      [52.50274, 13.43872],
    ];
    const routeDirectionsResult = await client.getRouteDirections(routePoints);

    assert.isOk(routeDirectionsResult.routes);
  });

  it("should be executed with different endpoint", async function () {
    const client = createClient(
      recorder.configureClientOptions({ endpoint: "https://us.atlas.microsoft.com/" })
    );
    const routePoints: LatLon[] = [
      [52.50931, 13.42936],
      [52.50274, 13.43872],
    ];
    const routeDirectionsResult = await client.getRouteDirections(routePoints);

    assert.isOk(routeDirectionsResult.routes);
  });
});

describe("Get Route Directions", function (this: Suite) {
  let recorder: Recorder;
  let client: MapsRouteClient;
  const fastTimeout = 10000;

  beforeEach(async function (this: Context) {
    testLogger.verbose(`Recorder: starting...`);
    recorder = await createRecorder(this);
    client = createClient(recorder.configureClientOptions({}));
  });

  afterEach(async function () {
    testLogger.verbose(`Recorder: stopping...`);
    await recorder.stop();
  });

  before(function (this: Context) {
    this.timeout(fastTimeout);
  });

  it("should accept LatLon[] and return route directions", async function () {
    const routePoints: LatLon[] = [
      [52.50931, 13.42936],
      [52.50274, 13.43872],
    ];
    const routeDirectionsResult = await client.getRouteDirections(routePoints);

    assert.isNotEmpty(routeDirectionsResult.routes);
  });

  it("should accept additional parameters and return route directions", async function () {
    const routePoints: LatLon[] = [
      [47.6133869, -122.0235832],
      [47.5565375, -122.1411044],
    ];

    const additionalParams: RouteDirectionParameters = {
      supportingPoints: {
        type: "GeometryCollection",
        geometries: [
          {
            type: "Point",
            coordinates: [-122.2471259, 47.5434278],
          },
          {
            type: "Point",
            coordinates: [-122.2962099, 47.526172],
          },
        ],
      },
      avoidVignette: ["AUS", "CHE"],
    };
    const routeDirectionsResult = await client.getRouteDirections(routePoints, additionalParams);

    assert.isNotEmpty(routeDirectionsResult.routes);
  });

  it("should throw error on empty routePoints array", async function () {
    // "routePoints must be a non-empty array"
    assert.isRejected(client.getRouteDirections([]));
  });
});

describe("Get Route Range", function () {
  let recorder: Recorder;
  let client: MapsRouteClient;
  const fastTimeout = 10000;

  beforeEach(async function (this: Context) {
    testLogger.verbose(`Recorder: starting...`);
    recorder = await createRecorder(this);
    client = createClient(recorder.configureClientOptions({}));
  });

  afterEach(async function () {
    testLogger.verbose(`Recorder: stopping...`);
    await recorder.stop();
  });

  before(function (this: Context) {
    this.timeout(fastTimeout);
  });

  it("should accept LatLon and return reachable range", async function () {
    const startCoordinates: LatLon = [50.97452, 5.86605];
    const routeRangeBudget = { timeBudgetInSeconds: 6000 };

    const routeRangeResult = await client.getRouteRange(startCoordinates, routeRangeBudget);

    assert.isNotEmpty(routeRangeResult.reachableRange);
  });
});

describe("LRO", function (this: Suite) {
  let recorder: Recorder;
  let client: MapsRouteClient;
  const CLITimeout = this.timeout();
  const fastTimeout = 10000;

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
    client = createClient(recorder.configureClientOptions({}));
  });

  afterEach(async function () {
    await recorder.stop();
  });

  const pollingInterval = isPlaybackMode() ? 0 : 2000;

  before(function (this: Context) {
    this.timeout(isPlaybackMode() ? fastTimeout : CLITimeout);
  });

  describe("Begin Request Route Directions Batch", function () {
    it("should throw errors if given empty array as queries", async function () {
      // "Number of queries must be between 1 and 700 inclusive.""
      assert.isRejected(client.beginRequestRouteDirectionsBatch([]));
    });

    it("could take an array of route directions requests as input", async function () {
      const batchRequests: RouteDirectionsRequest[] = [
        {
          routePoints: [
            [47.639987, -122.128384],
            [47.621252, -122.184408],
            [47.596437, -122.332],
          ],
          options: {
            routeType: KnownRouteType.Fastest,
            travelMode: KnownTravelMode.Car,
            maxAlternatives: 3,
          },
        },
        {
          routePoints: [
            [47.620659, -122.348934],
            [47.610101, -122.342015],
          ],
          options: {
            routeType: KnownRouteType.Economy,
            travelMode: KnownTravelMode.Bicycle,
            useTrafficData: false,
          },
        },
        {
          routePoints: [
            [40.759856, -73.985108],
            [40.771136, -73.973506],
          ],
          options: {
            routeType: KnownRouteType.Shortest,
            travelMode: KnownTravelMode.Pedestrian,
          },
        },
      ];

      const poller = await client.beginRequestRouteDirectionsBatch(batchRequests, {
        updateIntervalInMs: pollingInterval,
      });

      const batchResult = await poller.pollUntilDone();

      assert.equal(batchResult.totalRequests, batchRequests.length);
      assert.equal(batchResult.batchItems.length, batchRequests.length);
    });
  });

  describe("Resume Route Directions Batch Result", function () {
    it("should be able to resume the previous request", async function () {
      const batchRequests: RouteDirectionsRequest[] = [
        {
          routePoints: [
            [47.639987, -122.128384],
            [47.621252, -122.184408],
            [47.596437, -122.332],
          ],
          options: {
            routeType: KnownRouteType.Fastest,
            travelMode: KnownTravelMode.Car,
            maxAlternatives: 3,
          },
        },
        {
          routePoints: [
            [47.620659, -122.348934],
            [47.610101, -122.342015],
          ],
          options: {
            routeType: KnownRouteType.Economy,
            travelMode: KnownTravelMode.Bicycle,
            useTrafficData: false,
          },
        },
      ];

      // Initiate route directions batch
      const originalPoller = await client.beginRequestRouteDirectionsBatch(batchRequests, {
        updateIntervalInMs: pollingInterval,
      });
      const serializedState = originalPoller.toString();

      // Use serialized state to retrieve the result
      const rehydratedPoller = await client.resumeRequestRouteDirectionsBatch(serializedState, {
        updateIntervalInMs: pollingInterval,
      });
      const batchResult = await rehydratedPoller.pollUntilDone();

      assert.equal(batchResult.totalRequests, batchRequests.length);
      assert.equal(batchResult.batchItems.length, batchRequests.length);
    });

    it("should obtain the same result from the rehydrated poller after the lro is finished", async function () {
      const batchRequests: RouteDirectionsRequest[] = [
        {
          routePoints: [
            [47.639987, -122.128384],
            [47.621252, -122.184408],
            [47.596437, -122.332],
          ],
          options: {
            routeType: KnownRouteType.Fastest,
            travelMode: KnownTravelMode.Car,
            maxAlternatives: 3,
          },
        },
        {
          routePoints: [
            [47.620659, -122.348934],
            [47.610101, -122.342015],
          ],
          options: {
            routeType: KnownRouteType.Economy,
            travelMode: KnownTravelMode.Bicycle,
            useTrafficData: false,
          },
        },
      ];

      // Initiate route directions batch
      const originalPoller = await client.beginRequestRouteDirectionsBatch(batchRequests, {
        updateIntervalInMs: pollingInterval,
      });
      const originalResult = await originalPoller.pollUntilDone();

      // Use serialized state to retrieve the result
      const serializedState = originalPoller.toString();
      const rehydratedPoller = await client.resumeRequestRouteDirectionsBatch(serializedState, {
        updateIntervalInMs: pollingInterval,
      });
      const rehydratedResult = await rehydratedPoller.pollUntilDone();

      assert.deepEqual(originalResult, rehydratedResult);
    });
  });

  describe("Begin Request Route Matrix", function () {
    it("should accept routeMatrixQuery as input", async function () {
      const routeMatrixQuery: RouteMatrixQuery = {
        origins: {
          type: "MultiPoint",
          coordinates: [
            [4.85106, 52.36006],
            [4.85056, 52.36187],
          ],
        },
        destinations: {
          type: "MultiPoint",
          coordinates: [
            [4.85003, 52.36241],
            [13.42937, 52.50931],
          ],
        },
      };

      const poller = await client.beginRequestRouteMatrix(routeMatrixQuery, {
        updateIntervalInMs: pollingInterval,
      });

      const routeMatrixResult = await poller.pollUntilDone();

      assert.isNotEmpty(routeMatrixResult.matrix);
      assert.isNotEmpty(routeMatrixResult.summary);
      assert.equal(routeMatrixResult.summary.totalRoutes, 4);
    });
  });

  describe("Begin Get Route Matrix Result", function () {
    it("should be able to resume the previous request", async function () {
      const routeMatrixQuery: RouteMatrixQuery = {
        origins: {
          type: "MultiPoint",
          coordinates: [
            [4.85106, 52.36006],
            [4.85056, 52.36187],
          ],
        },
        destinations: {
          type: "MultiPoint",
          coordinates: [
            [4.85003, 52.36241],
            [13.42937, 52.50931],
          ],
        },
      };

      // Initiate route directions batch
      const originalPoller = await client.beginRequestRouteMatrix(routeMatrixQuery, {
        updateIntervalInMs: pollingInterval,
      });
      const serializedState = originalPoller.toString();

      // Use saved batchId to retrieve the result
      const rehydratedPoller = await client.resumeRequestRouteMatrix(serializedState, {
        updateIntervalInMs: pollingInterval,
      });
      const routeMatrixResult = await rehydratedPoller.pollUntilDone();

      assert.isNotEmpty(routeMatrixResult.matrix);
      assert.isNotEmpty(routeMatrixResult.summary);
      assert.equal(routeMatrixResult.summary.totalRoutes, 4);
    });

    it("should obtain the same result as beginRequestRouteMatrix ", async function () {
      const routeMatrixQuery: RouteMatrixQuery = {
        origins: {
          type: "MultiPoint",
          coordinates: [
            [4.85106, 52.36006],
            [4.85056, 52.36187],
          ],
        },
        destinations: {
          type: "MultiPoint",
          coordinates: [
            [4.85003, 52.36241],
            [13.42937, 52.50931],
          ],
        },
      };

      // Initiate route directions batch
      const originalPoller = await client.beginRequestRouteMatrix(routeMatrixQuery, {
        updateIntervalInMs: pollingInterval,
      });
      const originalResult = await originalPoller.pollUntilDone();

      // Use serialized state to retrieve the result
      const serializedState = originalPoller.toString();
      const rehydratedPoller = await client.resumeRequestRouteMatrix(serializedState, {
        updateIntervalInMs: pollingInterval,
      });
      const rehydratedResult = await rehydratedPoller.pollUntilDone();

      assert.deepEqual(originalResult, rehydratedResult);
    });
  });
});