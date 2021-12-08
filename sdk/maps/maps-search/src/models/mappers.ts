// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Address,
  BatchResult,
  ReverseSearchAddressResult,
  ReverseSearchAddressResultItem,
  ReverseSearchCrossStreetAddressResult,
  ReverseSearchCrossStreetAddressResultItem,
  SearchAddressResult,
  SearchAddressResultItem
} from "./results";
import {
  Address as AddressInternal,
  BatchRequest,
  BoundingBoxCompassNotation,
  BoundingBox as BoundingBoxInternal,
  ErrorResponse,
  SearchFuzzySearchOptionalParams as FuzzySearchOptionalParams,
  LatLongPairAbbreviated,
  ReverseSearchAddressBatchProcessResult,
  ReverseSearchAddressResult as ReverseSearchAddressResultInternal,
  ReverseSearchCrossStreetAddressResult as ReverseSearchCrossStreetAddressResultInternal,
  SearchAddressBatchResult,
  SearchSearchAddressOptionalParams as SearchAddressOptionalParams,
  SearchAddressResult as SearchAddressResultInternal,
  SearchSearchNearbyPointOfInterestOptionalParams as SearchNearbyPointOfInterestOptionalParams,
  SearchSearchPointOfInterestOptionalParams as SearchPointOfInterestOptionalParams
} from "../generated/models";
import { BoundingBox, LatLong } from "./models";
import {
  FuzzySearchOptions,
  SearchAddressOptions,
  SearchBaseOptions,
  SearchExtraFilterOptions,
  SearchNearbyPointOfInterestOptions,
  SearchPointOfInterestOptions
} from "./options";
import { FuzzySearchRequest, ReverseSearchAddressRequest, SearchAddressRequest } from "./requests";
import { OperationOptions } from "@azure/core-client";

/**
 * @internal
 */
export function toLatLongString(coordinates: LatLong): string {
  return `${coordinates.latitude},${coordinates.longitude}`;
}

/**
 * @internal
 */
export function extractOperationOptions(options: OperationOptions): OperationOptions {
  return {
    abortSignal: options.abortSignal,
    requestOptions: options.requestOptions,
    tracingOptions: options.tracingOptions,
    serializerOptions: options.serializerOptions,
    onResponse: options.onResponse
  };
}

/**
 * @internal
 */
export function mapSearchBaseOptions(options: SearchBaseOptions): SearchBaseOptions {
  return {
    top: options.top,
    skip: options.skip,
    language: options.language,
    extendedPostalCodesFor: options.extendedPostalCodesFor,
    localizedMapView: options.localizedMapView,
    ...extractOperationOptions(options)
  };
}

/**
 * @internal
 */
export function mapSearchExtraFilterOptions(
  options: SearchExtraFilterOptions
): SearchExtraFilterOptions {
  return {
    categoryFilter: options.categoryFilter,
    brandFilter: options.brandFilter,
    electricVehicleConnectorFilter: options.electricVehicleConnectorFilter
  };
}

/**
 * @internal
 */
export function mapSearchAddressOptions(
  options: SearchAddressOptions
): SearchAddressOptionalParams {
  return {
    isTypeAhead: options.isTypeAhead,
    countryFilter: options.countryFilter,
    lat: options.coordinates?.latitude,
    lon: options.coordinates?.longitude,
    radiusInMeters: options.radiusInMeters,
    topLeft: options.boundingBox ? toLatLongString(options.boundingBox.topLeft) : undefined,
    btmRight: options.boundingBox ? toLatLongString(options.boundingBox.bottomRight) : undefined,
    ...mapSearchBaseOptions(options)
  };
}

/**
 * @internal
 */
export function mapSearchPointOfInterestOptions(
  options: SearchPointOfInterestOptions
): SearchPointOfInterestOptionalParams {
  return {
    operatingHours: options.operatingHours,
    isTypeAhead: options.isTypeAhead,
    radiusInMeters: options.radiusInMeters,
    topLeft: options.boundingBox ? toLatLongString(options.boundingBox.topLeft) : undefined,
    btmRight: options.boundingBox ? toLatLongString(options.boundingBox.bottomRight) : undefined,
    ...mapSearchBaseOptions(options)
  };
}

/**
 * @internal
 */
export function mapSearchNearbyPointOfInterestOptions(
  options: SearchNearbyPointOfInterestOptions
): SearchNearbyPointOfInterestOptionalParams {
  return {
    countryFilter: options.countryFilter,
    radiusInMeters: options.radiusInMeters,
    ...mapSearchBaseOptions(options),
    ...mapSearchExtraFilterOptions(options),
    ...extractOperationOptions(options)
  };
}

/**
 * @internal
 */
export function mapFuzzySearchOptions(options: FuzzySearchOptions): FuzzySearchOptionalParams {
  return {
    entityType: options.entityType,
    minFuzzyLevel: options.minFuzzyLevel,
    maxFuzzyLevel: options.maxFuzzyLevel,
    indexFilter: options.indexFilter,
    ...mapSearchPointOfInterestOptions(options)
  };
}

/**
 * @internal
 */
export function mapLatLongPairAbbreviatedToLatLong(
  latLongAbbr?: LatLongPairAbbreviated
): LatLong | undefined {
  if (latLongAbbr && latLongAbbr.lat && latLongAbbr.lon) {
    return new LatLong(latLongAbbr.lat, latLongAbbr.lon);
  } else {
    return undefined;
  }
}

/**
 * @internal
 */
export function mapStringToLatLong(latLongStr?: string): LatLong | undefined {
  if (latLongStr && typeof latLongStr === "string") {
    const latLongArray = latLongStr.split(",");
    if (latLongArray.length === 2) {
      const lat = Number(latLongArray[0]);
      const lon = Number(latLongArray[1]);
      if (!isNaN(lat) && !isNaN(lon)) {
        return new LatLong(lat, lon);
      }
    }
  }
  return undefined;
}

/**
 * @internal
 */
export function mapBoundingBox(bbox?: BoundingBoxInternal): BoundingBox | undefined {
  if (bbox && bbox.topLeft && bbox.bottomRight) {
    const topLeft = mapLatLongPairAbbreviatedToLatLong(bbox.topLeft);
    const bottomRight = mapLatLongPairAbbreviatedToLatLong(bbox.bottomRight);
    if (topLeft && bottomRight) {
      return new BoundingBox(topLeft, bottomRight);
    }
  }
  return undefined;
}

/**
 * @internal
 */
export function mapBoundingBoxFromCompassNotation(
  bbox?: BoundingBoxCompassNotation
): BoundingBox | undefined {
  if (bbox && bbox.northEast && bbox.southWest) {
    const topLeftCoords = bbox.northEast.split(",").map((s) => Number(s));
    const bottomRightCoords = bbox.southWest.split(",").map((s) => Number(s));
    if (topLeftCoords.length !== 2 || bottomRightCoords.length !== 2) {
      return new BoundingBox(
        new LatLong(topLeftCoords[0], topLeftCoords[1]),
        new LatLong(bottomRightCoords[0], bottomRightCoords[1])
      );
    }
  }
  return undefined;
}

/**
 * @internal
 */
export function mapAddress(address?: AddressInternal): Address | undefined {
  if (address) {
    const mappedAddress = {
      buildingNumber: address.buildingNumber,
      street: address.street,
      crossStreet: address.crossStreet,
      streetNumber: address.streetNumber,
      routeNumbers: address.routeNumbers,
      streetName: address.streetName,
      streetNameAndNumber: address.streetNameAndNumber,
      municipality: address.municipality,
      municipalitySubdivision: address.municipalitySubdivision,
      countryTertiarySubdivision: address.countryTertiarySubdivision,
      countrySecondarySubdivision: address.countrySecondarySubdivision,
      countrySubdivision: address.countrySubdivision,
      postalCode: address.postalCode,
      extendedPostalCode: address.extendedPostalCode,
      countryCode: address.countryCode,
      country: address.country,
      countryCodeISO3: address.countryCodeISO3,
      freeformAddress: address.freeformAddress,
      countrySubdivisionName: address.countrySecondarySubdivision,
      localName: address.localName,
      boundingBox: mapBoundingBoxFromCompassNotation(address.boundingBox)
    };
    return removeUndefinedProperties(mappedAddress);
  }
  return undefined;
}

/**
 * @internal
 */
export function mapSearchAddressResult(
  internalResult: SearchAddressResultInternal
): SearchAddressResult {
  const resultWithUndefinedProps = {
    query: internalResult.summary?.query,
    queryType: internalResult.summary?.queryType,
    queryTime: internalResult.summary?.queryTime,
    numResults: internalResult.summary?.numResults,
    top: internalResult.summary?.top,
    skip: internalResult.summary?.skip,
    totalResults: internalResult.summary?.totalResults,
    fuzzyLevel: internalResult.summary?.fuzzyLevel,
    geoBias: mapLatLongPairAbbreviatedToLatLong(internalResult.summary?.geoBias),
    results: internalResult.results?.map((ir) => {
      const mappedResult: SearchAddressResultItem = {
        type: ir.type,
        id: ir.id,
        score: ir.score,
        distanceInMeters: ir.distanceInMeters,
        info: ir.info,
        entityType: ir.entityType,
        pointOfInterest: ir.pointOfInterest,
        address: mapAddress(ir.address),
        position:
          ir.position && ir.position.lat && ir.position.lon
            ? new LatLong(ir.position.lat, ir.position.lon)
            : undefined,
        viewport: mapBoundingBox(ir.viewport),
        entryPoints: ir.entryPoints?.map((p) => {
          return { type: p.type, position: mapLatLongPairAbbreviatedToLatLong(p.position) };
        }),
        addressRanges: ir.addressRanges
          ? {
              rangeLeft: ir.addressRanges.rangeLeft,
              rangeRight: ir.addressRanges.rangeRight,
              from: mapLatLongPairAbbreviatedToLatLong(ir.addressRanges.from),
              to: mapLatLongPairAbbreviatedToLatLong(ir.addressRanges.to)
            }
          : undefined,
        dataSources: ir.dataSources,
        matchType: ir.matchType,
        detourTime: ir.detourTime
      };
      return removeUndefinedProperties(mappedResult);
    })
  };

  const result: SearchAddressResult = removeUndefinedProperties(resultWithUndefinedProps);
  return result;
}

/**
 * @internal
 */
export function removeUndefinedProperties(obj: Record<string, any>): Record<string, any> {
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined)
    .reduce((result, [key, value]) => ({ ...result, [key]: value }), {});
}

/**
 * @internal
 */
export function mapReverseSearchAddressResult(
  internalResult: ReverseSearchAddressResultInternal
): ReverseSearchAddressResult {
  const resultWithUndefinedProps = {
    queryTime: internalResult.summary?.queryTime,
    numResults: internalResult.summary?.numResults,
    results: internalResult.addresses?.map((ad) => {
      const mappedResult: ReverseSearchAddressResultItem = {
        address: mapAddress(ad.address),
        position: mapStringToLatLong(ad.position),
        roadUse: ad.roadUse,
        matchType: ad.matchType
      };
      return removeUndefinedProperties(mappedResult);
    })
  };
  const result: ReverseSearchAddressResult = removeUndefinedProperties(resultWithUndefinedProps);
  return result;
}

/**
 * @internal
 */
export function mapReverseSearchCrossStreetAddressResult(
  internalResult: ReverseSearchCrossStreetAddressResultInternal
): ReverseSearchCrossStreetAddressResult {
  const resultWithUndefinedProps = {
    queryTime: internalResult.summary?.queryTime,
    numResults: internalResult.summary?.numResults,
    results: internalResult.addresses?.map((ad) => {
      const mappedResult: ReverseSearchCrossStreetAddressResultItem = {
        address: mapAddress(ad.address),
        position: mapStringToLatLong(ad.position)
      };
      return removeUndefinedProperties(mappedResult);
    })
  };

  const result: ReverseSearchCrossStreetAddressResult = removeUndefinedProperties(
    resultWithUndefinedProps
  );
  return result;
}

/**
 * @Internal
 */
export function mapSearchAddressBatchResult(
  internalResult: SearchAddressBatchResult
): BatchResult<SearchAddressResult> {
  const result: BatchResult<SearchAddressResult> = {
    totalRequests: internalResult.batchSummary?.totalRequests,
    successfulRequests: internalResult.batchSummary?.successfulRequests,
    batchItems: internalResult.batchItems?.map((item) => {
      if (item.statusCode === 200) {
        return {
          statusCode: item.statusCode,
          response: mapSearchAddressResult(item.response as SearchAddressResultInternal)
        };
      } else {
        return { statusCode: item.statusCode, response: item.response as ErrorResponse };
      }
    })
  };
  return result;
}

/**
 * @Internal
 */
export function mapReverseSearchAddressBatchResult(
  internalResult: ReverseSearchAddressBatchProcessResult
): BatchResult<ReverseSearchAddressResult> {
  const result: BatchResult<SearchAddressResult> = {
    totalRequests: internalResult.batchSummary?.totalRequests,
    successfulRequests: internalResult.batchSummary?.successfulRequests,
    batchItems: internalResult.batchItems?.map((item) => {
      if (item.statusCode === 200) {
        return {
          statusCode: item.statusCode,
          response: mapReverseSearchAddressResult(
            item.response as ReverseSearchAddressResultInternal
          )
        };
      } else {
        return { statusCode: item.statusCode, response: item.response as ErrorResponse };
      }
    })
  };
  return result;
}

/**
 * @internal
 */
const clientToServiceNames: Readonly<Record<string, string>> = {
  operatingHours: "openingHours",
  isTypeAhead: "typeahead",
  radiusInMeters: "radius",
  localizedMapView: "view",
  top: "limit",
  skip: "offset",
  includeSpeedLimit: "returnSpeedLimit",
  numberParam: "number",
  includeRoadUse: "returnRoadUse",
  includeMatchType: "returnMatchType"
};

/**
 * @internal
 */
const clientToServiceNamesArray: Readonly<Record<string, string>> = {
  indexFilter: "idxSet",
  categoryFilter: "categorySet",
  brandFilter: "brandSet",
  countryFilter: "countrySet",
  electricVehicleConnectorFilter: "connectorSet",
  roadUse: "roadUse"
};

/**
 * @internal
 */
function createPartialQueryStringFromOptions(
  options: FuzzySearchOptions | SearchAddressOptions
): string {
  let partialQuery = "";
  for (const [k, v] of Object.entries(options)) {
    // Skip if no value
    if (!v) continue;
    // Check name mappings: primitive values
    if (k in clientToServiceNames) {
      partialQuery += `&${clientToServiceNames[k]}=${v}`;
      // Check name mappings: Array values
    } else if (k in clientToServiceNamesArray) {
      if (Array.isArray(v) && v.length > 0) {
        partialQuery += `&${clientToServiceNames[k]}=${v.join(",")}`;
      }
    } else {
      partialQuery += `&${k}=${v}`;
    }
  }
  return partialQuery;
}

/**
 * @internal
 */
export function createFuzzySearchBatchRequest(requests: FuzzySearchRequest[]): BatchRequest {
  return {
    batchItems: requests.map((r) => {
      // Add top level query parameters
      let query = `?query=${r.query}`;
      if (r.coordinates) {
        query += `&lat=${r.coordinates.latitude}&lon=${r.coordinates.longitude}`;
      }
      if (r.countryFilter && r.countryFilter.length > 0) {
        query += `&countrySet=${r.countryFilter.join(",")}`;
      }

      // Add optional query parameters
      if (r.options) {
        query += createPartialQueryStringFromOptions(r.options);
      }

      return { query };
    })
  };
}

/**
 * @internal
 */
export function createSearchAddressBatchRequest(requests: SearchAddressRequest[]): BatchRequest {
  return {
    batchItems: requests.map((r) => {
      // Add top level query parameters
      let query = `?query=${r.query}`;

      // Add optional query parameters
      if (r.options) {
        query += createPartialQueryStringFromOptions(r.options);
      }
      return { query };
    })
  };
}

/**
 * @internal
 */
export function createReverseSearchAddressBatchRequest(
  requests: ReverseSearchAddressRequest[]
): BatchRequest {
  return {
    batchItems: requests.map((r) => {
      // Add top level query parameters
      let query = `?query=${r.coordinates.latitude},${r.coordinates.longitude}`;

      // Add optional query parameters
      if (r.options) {
        query += createPartialQueryStringFromOptions(r.options);
      }
      return { query };
    })
  };
}