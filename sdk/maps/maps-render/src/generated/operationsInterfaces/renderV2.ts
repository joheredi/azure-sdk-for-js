/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TilesetID,
  TileIndex,
  RenderV2GetMapTileOptionalParams,
  RenderV2GetMapTileResponse,
  RenderV2GetMapTilesetOptionalParams,
  RenderV2GetMapTilesetResponse,
  RenderV2GetMapAttributionOptionalParams,
  RenderV2GetMapAttributionResponse,
  RenderV2GetMapStateTileOptionalParams,
  RenderV2GetMapStateTileResponse,
  ResponseFormat,
  RenderV2GetCopyrightCaptionOptionalParams,
  RenderV2GetCopyrightCaptionResponse,
  RasterTileFormat,
  RenderV2GetMapStaticImageOptionalParams,
  RenderV2GetMapStaticImageResponse,
  BoundingBox,
  RenderV2GetCopyrightFromBoundingBoxOptionalParams,
  RenderV2GetCopyrightFromBoundingBoxResponse,
  RenderV2GetCopyrightForTileOptionalParams,
  RenderV2GetCopyrightForTileResponse,
  RenderV2GetCopyrightForWorldOptionalParams,
  RenderV2GetCopyrightForWorldResponse
} from "../models";

/** Interface representing a RenderV2. */
export interface RenderV2 {
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * The Get Map Tiles API allows users to request map tiles in vector or raster formats typically to be
   * integrated  into a map control or SDK. Some example tiles that can be requested are Azure Maps road
   * tiles, real-time  Weather Radar tiles or the map tiles created using [Azure Maps
   * Creator](https://aka.ms/amcreator). By default,  Azure Maps uses vector tiles for its web map
   * control (Web SDK) and Android SDK.
   * @param tilesetId A tileset is a collection of raster or vector data broken up into a uniform grid of
   *                  square tiles at preset  zoom levels. Every tileset has a **tilesetId** to use when making requests.
   *                  The **tilesetId** for tilesets created using [Azure Maps Creator](https://aka.ms/amcreator) are
   *                  generated through the  [Tileset Create API](https://docs.microsoft.com/en-us/rest/api/maps/tileset).
   *                  The ready-to-use tilesets supplied  by Azure Maps are listed below. For example, microsoft.base.
   * @param tileIndex Parameter group
   * @param options The options parameters.
   */
  getMapTile(
    tilesetId: TilesetID,
    tileIndex: TileIndex,
    options?: RenderV2GetMapTileOptionalParams
  ): Promise<RenderV2GetMapTileResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * The Get Map Tileset API allows users to request metadata for a tileset.
   * @param tilesetId A tileset is a collection of raster or vector data broken up into a uniform grid of
   *                  square tiles at preset  zoom levels. Every tileset has a **tilesetId** to use when making requests.
   *                  The **tilesetId** for tilesets created using [Azure Maps Creator](https://aka.ms/amcreator) are
   *                  generated through the  [Tileset Create API](https://docs.microsoft.com/en-us/rest/api/maps/tileset).
   *                  The ready-to-use tilesets supplied  by Azure Maps are listed below. For example, microsoft.base.
   * @param options The options parameters.
   */
  getMapTileset(
    tilesetId: TilesetID,
    options?: RenderV2GetMapTilesetOptionalParams
  ): Promise<RenderV2GetMapTilesetResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * The Get Map Attribution API allows users to request map copyright attribution information for a
   * section of a tileset.
   * @param tilesetId A tileset is a collection of raster or vector data broken up into a uniform grid of
   *                  square tiles at preset  zoom levels. Every tileset has a **tilesetId** to use when making requests.
   *                  The **tilesetId** for tilesets created using [Azure Maps Creator](https://aka.ms/amcreator) are
   *                  generated through the  [Tileset Create API](https://docs.microsoft.com/en-us/rest/api/maps/tileset).
   *                  The ready-to-use tilesets supplied  by Azure Maps are listed below. For example, microsoft.base.
   * @param zoom Zoom level for the desired map attribution.
   * @param bounds The string that represents the rectangular area of a bounding box. The bounds
   *               parameter is defined by the 4 bounding box coordinates, with WGS84 longitude and latitude of the
   *               southwest corner followed by  WGS84 longitude and latitude of the northeast corner. The string is
   *               presented in the following  format: `[SouthwestCorner_Longitude, SouthwestCorner_Latitude,
   *               NortheastCorner_Longitude,  NortheastCorner_Latitude]`.
   * @param options The options parameters.
   */
  getMapAttribution(
    tilesetId: TilesetID,
    zoom: number,
    bounds: number[],
    options?: RenderV2GetMapAttributionOptionalParams
  ): Promise<RenderV2GetMapAttributionResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Fetches state tiles in vector format typically to be integrated into indoor maps module of map
   * control or SDK. The map control will call this API after user turns on dynamic styling (see [Zoom
   * Levels and Tile
   * Grid](https://docs.microsoft.com/en-us/azure/location-based-services/zoom-levels-and-tile-grid))
   * @param statesetId The stateset id.
   * @param tileIndex Parameter group
   * @param options The options parameters.
   */
  getMapStateTile(
    statesetId: string,
    tileIndex: TileIndex,
    options?: RenderV2GetMapStateTileOptionalParams
  ): Promise<RenderV2GetMapStateTileResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Copyrights API is designed to serve copyright information for Render Tile
   * service. In addition to basic copyright for the whole map, API is serving
   * specific groups of copyrights for some countries.
   *
   * As an alternative to copyrights for map request, one can receive captions
   * for displaying the map provider information on the map.
   * @param format Desired format of the response. Value can be either _json_ or _xml_.
   * @param options The options parameters.
   */
  getCopyrightCaption(
    format: ResponseFormat,
    options?: RenderV2GetCopyrightCaptionOptionalParams
  ): Promise<RenderV2GetCopyrightCaptionResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * The static image service renders a user-defined, rectangular image containing a map section using a
   * zoom level from 0 to 20. The static image service renders a user-defined, rectangular image
   * containing a map section using a zoom level from 0 to 20. The supported resolution range for the map
   * image is from 1x1 to 8192x8192. If you are deciding when to use the static image service over the
   * map tile service, you may want to consider how you would like to interact with the rendered map. If
   * the map contents will be relatively unchanging, a static map is a good choice. If you want to
   * support a lot of zooming, panning and changing of the map content, the map tile service would be a
   * better choice.
   *
   * Service also provides Image Composition functionality to get a static image back with additional
   * data like; pushpins and geometry overlays with following S0 and S1 capabilities.
   *
   * In S0 you can:
   * - Render up to 5 pushpins specified in the request
   * - Provide one custom image for the pins referenced in the request
   * - Add labels to the pushpins
   *
   * In S1 you can:
   * - Render pushpins through [Azure Maps Data Service](https://aka.ms/AzureMapsMapDataService)
   * - Specify multiple pushpin styles
   * - Render circle, polyline and polygon geometry types.
   * - Render of supported GeoJSON geometry types uploaded through [Azure Maps Data
   * Service](https://aka.ms/AzureMapsMapDataService)
   *
   * Please see [How-to-Guide](https://aka.ms/AzureMapsHowToGuideImageCompositor) for detailed examples.
   *
   * _Note_ : Either **center** or **bbox** parameter must be supplied to the
   * API.
   * <br><br>
   * The supported Lat and Lon ranges when using the **bbox** parameter, are as follows:
   * <br><br>
   *
   *   |Zoom Level | Max Lon Range   | Max Lat Range|
   *   |:----------|:----------------|:-------------|
   *   |0          | 360.0           | 170.0        |
   *   |1          | 360.0           | 170.0        |
   *   |2          | 360.0           | 170.0        |
   *   |3          | 360.0           | 170.0        |
   *   |4          | 360.0           | 170.0        |
   *   |5          | 180.0           | 85.0         |
   *   |6          | 90.0            | 42.5         |
   *   |7          | 45.0            | 21.25        |
   *   |8          | 22.5            | 10.625       |
   *   |9          | 11.25           | 5.3125       |
   *   |10         | 5.625           | 2.62625      |
   *   |11         | 2.8125          | 1.328125     |
   *   |12         | 1.40625         | 0.6640625    |
   *   |13         | 0.703125        | 0.33203125   |
   *   |14         | 0.3515625       | 0.166015625  |
   *   |15         | 0.17578125      | 0.0830078125 |
   *   |16         | 0.087890625     | 0.0415039063 |
   *   |17         | 0.0439453125    | 0.0207519531 |
   *   |18         | 0.0219726563    | 0.0103759766 |
   *   |19         | 0.0109863281    | 0.0051879883 |
   *   |20         | 0.0054931641    | 0.0025939941 |
   * @param format Desired format of the response. Possible value: png.
   * @param options The options parameters.
   */
  getMapStaticImage(
    format: RasterTileFormat,
    options?: RenderV2GetMapStaticImageOptionalParams
  ): Promise<RenderV2GetMapStaticImageResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Returns copyright information for a given bounding box. Bounding-box requests should specify the
   * minimum and maximum longitude and latitude (EPSG-3857) coordinates
   * @param format Desired format of the response. Value can be either _json_ or _xml_.
   * @param boundingBox Parameter group
   * @param options The options parameters.
   */
  getCopyrightFromBoundingBox(
    format: ResponseFormat,
    boundingBox: BoundingBox,
    options?: RenderV2GetCopyrightFromBoundingBoxOptionalParams
  ): Promise<RenderV2GetCopyrightFromBoundingBoxResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Copyrights API is designed to serve copyright information for Render Tile  service. In addition to
   * basic copyright for the whole map, API is serving  specific groups of copyrights for some countries.
   * Returns the copyright information for a given tile. To obtain the copyright information for a
   * particular tile, the request should specify the tile's zoom level and x and y coordinates (see: Zoom
   * Levels and Tile Grid).
   * @param format Desired format of the response. Value can be either _json_ or _xml_.
   * @param tileIndex Parameter group
   * @param options The options parameters.
   */
  getCopyrightForTile(
    format: ResponseFormat,
    tileIndex: TileIndex,
    options?: RenderV2GetCopyrightForTileOptionalParams
  ): Promise<RenderV2GetCopyrightForTileResponse>;
  /**
   * **Applies to:** see pricing [tiers](https://aka.ms/AzureMapsPricingTier).
   *
   * Copyrights API is designed to serve copyright information for Render Tile  service. In addition to
   * basic copyright for the whole map, API is serving  specific groups of copyrights for some countries.
   * Returns the copyright information for the world. To obtain the default copyright information for the
   * whole world, do not specify a tile or bounding box.
   * @param format Desired format of the response. Value can be either _json_ or _xml_.
   * @param options The options parameters.
   */
  getCopyrightForWorld(
    format: ResponseFormat,
    options?: RenderV2GetCopyrightForWorldOptionalParams
  ): Promise<RenderV2GetCopyrightForWorldResponse>;
}