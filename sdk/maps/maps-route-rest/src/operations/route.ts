import { MapsRouteClient } from "../rest/index.js";
import { createHttpPoller } from "@azure/core-lro";

export interface RequestRouteMatrixOptions {
  format?: "json";
  computeTravelTime?: "none" | "all";
  sectionType?: SectionType;
  arriveAt?: Date;
  departAt?: Date;
  vehicleAxleWeight?: number;
  vehicleLength?: number;
  vehicleHeight?: number;
  vehicleWidth?: number;
  vehicleMaxSpeed?: number;
  windingness?: "low" | "normal" | "high";
  inclineLevel?: "low" | "normal" | "high";
  travelMode?: "car" | "truck" | "taxi" | "bus" | "van" | "motorcycle" | "bicycle" | "pedestrian";
  routeAvoidList?: RouteRoadType[];
  useTrafficData?: boolean;
  routeType?: RouteType;
  vehicleLoadType?:
    | "USHazmatClass1"
    | "USHazmatClass2"
    | "USHazmatClass3"
    | "USHazmatClass4"
    | "USHazmatClass5"
    | "USHazmatClass6"
    | "USHazmatClass7"
    | "USHazmatClass8"
    | "USHazmatClass9"
    | "otherHazmatExplosive"
    | "otherHazmatGeneral"
    | "otherHazmatHarmfulToWater";
}

export type RouteType = "fastest" | "shortest" | "eco" | "thrilling";

export type RouteRoadType =
  | "tollRoads"
  | "motorways"
  | "ferries"
  | "unpavedRoads"
  | "carpools"
  | "alreadyUsedRoads"
  | "borderCrossings";

export type SectionType =
  | "CarOrTrain"
  | "Country"
  | "Ferry"
  | "Motorway"
  | "Pedestrian"
  | "TollRoad"
  | "TollVignette"
  | "Traffic"
  | "TravelMode"
  | "Tunnel"
  | "Carpool"
  | "Urban";

type SerializedSectionType =
  | "CAR_TRAIN"
  | "COUNTRY"
  | "FERRY"
  | "MOTORWAY"
  | "PEDESTRIAN"
  | "TOLL_ROAD"
  | "TOLL_VIGNETTE"
  | "TRAFFIC"
  | "TRAVEL_MODE"
  | "TUNNEL"
  | "CARPOOL"
  | "URBAN";

const responseSectionTypeMap: Record<SectionType, SerializedSectionType> = {
  CarOrTrain: "CAR_TRAIN",
  Country: "COUNTRY",
  Ferry: "FERRY",
  Motorway: "MOTORWAY",
  Pedestrian: "PEDESTRIAN",
  TollRoad: "TOLL_ROAD",
  TollVignette: "TOLL_VIGNETTE",
  Traffic: "TRAFFIC",
  TravelMode: "TRAVEL_MODE",
  Tunnel: "TUNNEL",
  Carpool: "CARPOOL",
  Urban: "URBAN",
};

export type GeoJsonObjectType =
  | "GeoJsonPoint"
  | "GeoJsonMultiPoint"
  | "GeoJsonLineString"
  | "GeoJsonMultiLineString"
  | "GeoJsonPolygon"
  | "GeoJsonMultiPolygon"
  | "GeoJsonGeometryCollection"
  | "GeoJsonFeature"
  | "GeoJsonFeatureCollection";

export type SerializedGeoJsonObjectType =
  | "Point"
  | "MultiPoint"
  | "LineString"
  | "MultiLineString"
  | "Polygon"
  | "MultiPolygon"
  | "GeometryCollection"
  | "Feature"
  | "FeatureCollection";

export interface GeoJsonObject {
  type: GeoJsonObjectType;
}

const geoJsonObjectTypeMap: Record<GeoJsonObjectType, SerializedGeoJsonObjectType> = {
  GeoJsonPoint: "Point",
  GeoJsonMultiPoint: "MultiPoint",
  GeoJsonLineString: "LineString",
  GeoJsonMultiLineString: "MultiLineString",
  GeoJsonPolygon: "Polygon",
  GeoJsonMultiPolygon: "MultiPolygon",
  GeoJsonGeometryCollection: "GeometryCollection",
  GeoJsonFeature: "Feature",
  GeoJsonFeatureCollection: "FeatureCollection",
};

export interface GeoJsonFeatureData extends Record<string, unknown> {
  geometry: GeoJsonGeometry;
  id?: string;
  featureType: string;
}

// Can we express this in CADL?
export type GeoJsonPosition = [number, number];

export interface GeoJsonMultiPointData {
  coordinates: GeoJsonPosition[];
}

// Empty
export interface GeoJsonFeature extends GeoJsonFeatureData, GeoJsonObject {}

// Empty
export interface GeoJsonGeometry extends GeoJsonObject {}

// Empty
export interface GeoJsonMultiPoint extends GeoJsonGeometry, GeoJsonMultiPointData {}

export interface RouteMatrixQuery {
  origins: GeoJsonMultiPoint;
  destinations: GeoJsonMultiPoint;
}

export async function requestRouteMatrix(
  clientContext: MapsRouteClient,
  routeMatrixQuery: any,
  options: RequestRouteMatrixOptions = {}
) {
  // "json" comes from a swagger/cadl defined client-default-value
  const format = options.format ?? "json";

  let sectionType: SerializedSectionType | undefined = undefined;

  if (options.sectionType) {
    sectionType = responseSectionTypeMap[options.sectionType];
  }

  clientContext.path("/route/matrix/{format}", format).post({
    queryParameters: {
      computeTravelTime: options.computeTravelTime,
      sectionType: sectionType,
      arriveAt: options.arriveAt,
      departAt: options.departAt,
      vehicleAxleWeight: options.vehicleAxleWeight,
      vehicleLength: options.vehicleLength,
      vehicleHeight: options.vehicleHeight,
      vehicleWidth: options.vehicleWidth,
      vehicleMaxSpeed: options.vehicleMaxSpeed,
      windingness: options.windingness,
      hilliness: options.inclineLevel,
      travelMode: options.travelMode,
      avoid: options.routeAvoidList,
      traffic: options.useTrafficData,
      routeType: options.routeType,
      vehicleLoadType: options.vehicleLoadType,
    },
  });
}
