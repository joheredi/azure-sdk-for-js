## API Report File for "@azure/maps-render"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureKeyCredential } from '@azure/core-auth';
import { CommonClientOptions } from '@azure/core-client';
import { OperationOptions } from '@azure/core-client';
import { TokenCredential } from '@azure/core-auth';

export { AzureKeyCredential }

// @public
export interface BoundingBox {
    bottomRight: LatLon;
    topLeft: LatLon;
}

// @public
export interface Copyright {
    readonly formatVersion?: string;
    readonly generalCopyrights?: string[];
    readonly regions?: RegionCopyrights[];
}

// @public
export interface CopyrightCaptionResult {
    readonly copyrightsCaption?: string;
    readonly formatVersion?: string;
}

// @public
export interface GetAttributionOptions extends OperationOptions {
}

// @public
export interface GetCopyrightCaptionOptions extends OperationOptions {
}

// @public
export interface GetCopyrightOptions extends OperationOptions {
    includeText?: IncludeText;
}

// @public
export interface GetMapStateTileOptions extends OperationOptions {
}

// @public
export interface GetMapStaticImageOptions extends OperationOptions {
    boundingBox?: BoundingBox;
    center?: LatLon;
    height?: number;
    language?: string;
    layer?: StaticMapLayer;
    localizedMapView?: LocalizedMapView;
    path?: string[];
    pins?: string[];
    style?: MapImageStyle;
    width?: number;
    zoom?: number;
}

// @public
export interface GetMapTileOptions extends OperationOptions {
    language?: string;
    localizedMapView?: LocalizedMapView;
    tileSize?: MapTileSize;
    timeStamp?: Date;
}

// @public
export interface GetMapTilesetOptions extends OperationOptions {
}

// @public
export type IncludeText = string;

// @public
export enum KnownIncludeText {
    No = "no",
    Yes = "yes"
}

// @public
export enum KnownLocalizedMapView {
    AE = "AE",
    AR = "AR",
    Auto = "Auto",
    BH = "BH",
    IN = "IN",
    IQ = "IQ",
    JO = "JO",
    KW = "KW",
    LB = "LB",
    MA = "MA",
    OM = "OM",
    PK = "PK",
    PS = "PS",
    QA = "QA",
    SA = "SA",
    SY = "SY",
    Unified = "Unified",
    YE = "YE"
}

// @public
export enum KnownMapImageStyle {
    Dark = "dark",
    Main = "main"
}

// @public
export enum KnownMapTileSize {
    Size256 = "256",
    Size512 = "512"
}

// @public
export enum KnownRasterTileFormat {
    Png = "png"
}

// @public
export enum KnownStaticMapLayer {
    Basic = "basic",
    Hybrid = "hybrid",
    Labels = "labels"
}

// @public
export enum KnownTilesetID {
    MicrosoftBase = "microsoft.base",
    MicrosoftBaseDarkgrey = "microsoft.base.darkgrey",
    MicrosoftBaseHybrid = "microsoft.base.hybrid",
    MicrosoftBaseHybridDarkgrey = "microsoft.base.hybrid.darkgrey",
    MicrosoftBaseHybridRoad = "microsoft.base.hybrid.road",
    MicrosoftBaseLabels = "microsoft.base.labels",
    MicrosoftBaseLabelsDarkgrey = "microsoft.base.labels.darkgrey",
    MicrosoftBaseLabelsRoad = "microsoft.base.labels.road",
    MicrosoftBaseRoad = "microsoft.base.road",
    MicrosoftDem = "microsoft.dem",
    MicrosoftDemContours = "microsoft.dem.contours",
    MicrosoftImagery = "microsoft.imagery",
    MicrosoftTerraMain = "microsoft.terra.main",
    MicrosoftTrafficAbsolute = "microsoft.traffic.absolute",
    MicrosoftTrafficAbsoluteMain = "microsoft.traffic.absolute.main",
    MicrosoftTrafficDelay = "microsoft.traffic.delay",
    MicrosoftTrafficDelayMain = "microsoft.traffic.delay.main",
    MicrosoftTrafficIncident = "microsoft.traffic.incident",
    MicrosoftTrafficReducedMain = "microsoft.traffic.reduced.main",
    MicrosoftTrafficRelative = "microsoft.traffic.relative",
    MicrosoftTrafficRelativeDark = "microsoft.traffic.relative.dark",
    MicrosoftTrafficRelativeMain = "microsoft.traffic.relative.main",
    MicrosoftWeatherInfraredMain = "microsoft.weather.infrared.main",
    MicrosoftWeatherRadarMain = "microsoft.weather.radar.main"
}

// @public
export interface LatLon {
    // (undocumented)
    latitude: number;
    // (undocumented)
    longitude: number;
}

// @public
export type LocalizedMapView = string;

// @public
export interface MapAttribution {
    copyrights?: string[];
}

// @public
export type MapImageStyle = string;

// @public
export class MapsRenderClient {
    constructor(credential: AzureKeyCredential, options?: MapsRenderClientOptions);
    constructor(credential: TokenCredential, mapsAccountClientId: string, options?: MapsRenderClientOptions);
    getCopyrightCaption(options?: GetCopyrightCaptionOptions): Promise<CopyrightCaptionResult>;
    getCopyrightForTile(tileIndex: TileIndex, options?: GetCopyrightOptions): Promise<Copyright>;
    getCopyrightForWorld(options?: GetCopyrightOptions): Promise<Copyright>;
    getCopyrightFromBoundingBox(boundingBox: BoundingBox, options?: GetCopyrightOptions): Promise<Copyright>;
    getMapAttribution(tilesetId: TilesetID, zoom: number, boundingBox: BoundingBox, options?: GetAttributionOptions): Promise<MapAttribution>;
    getMapStateTile(statesetId: string, tileIndex: TileIndex, options?: GetMapStateTileOptions): Promise<MapTile>;
    getMapStaticImage(format: RasterTileFormat, options?: GetMapStaticImageOptions): Promise<MapTile>;
    getMapTile(tilesetId: TilesetID, tileIndex: TileIndex, options?: GetMapTileOptions): Promise<MapTile>;
    getMapTileset(tilesetId: TilesetID, options?: GetMapTilesetOptions): Promise<MapTileset>;
}

// @public
export type MapsRenderClientOptions = CommonClientOptions;

// @public (undocumented)
export interface MapTile {
    blobBody?: Promise<Blob>;
    contentType?: string;
    readableStreamBody?: NodeJS.ReadableStream;
}

// @public
export interface MapTileset {
    attribution?: string;
    bounds?: number[];
    center?: number[];
    data?: string[];
    description?: string;
    grids?: string[];
    legend?: string;
    maxZoom?: number;
    minZoom?: number;
    name?: string;
    scheme?: string;
    template?: string;
    tilejson?: string;
    tiles?: string[];
    version?: string;
}

// @public
export type MapTileSize = string;

// @public
export type RasterTileFormat = string;

// @public (undocumented)
export interface RegionCopyrights {
    readonly copyrights?: string[];
    readonly country?: RegionCopyrightsCountry;
}

// @public
export interface RegionCopyrightsCountry {
    readonly iso3?: string;
    readonly label?: string;
}

// @public
export type StaticMapLayer = string;

// @public
export interface TileIndex {
    x: number;
    y: number;
    z: number;
}

// @public
export type TilesetID = string;


// (No @packageDocumentation comment for this package)

```