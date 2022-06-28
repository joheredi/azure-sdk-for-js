/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MapTileset: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapTileset",
    modelProperties: {
      tilejson: {
        constraints: {
          Pattern: new RegExp("\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*")
        },
        serializedName: "tilejson",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      version: {
        constraints: {
          Pattern: new RegExp("\\d+\\.\\d+\\.\\d+\\w?[\\w\\d]*")
        },
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      attribution: {
        serializedName: "attribution",
        type: {
          name: "String"
        }
      },
      template: {
        serializedName: "template",
        type: {
          name: "String"
        }
      },
      legend: {
        serializedName: "legend",
        type: {
          name: "String"
        }
      },
      scheme: {
        serializedName: "scheme",
        type: {
          name: "String"
        }
      },
      tiles: {
        serializedName: "tiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      grids: {
        serializedName: "grids",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      minZoom: {
        constraints: {
          InclusiveMaximum: 30,
          InclusiveMinimum: 0
        },
        serializedName: "minzoom",
        type: {
          name: "Number"
        }
      },
      maxZoom: {
        constraints: {
          InclusiveMaximum: 30,
          InclusiveMinimum: 0
        },
        serializedName: "maxzoom",
        type: {
          name: "Number"
        }
      },
      bounds: {
        serializedName: "bounds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      center: {
        serializedName: "center",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const MapAttribution: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MapAttribution",
    modelProperties: {
      copyrights: {
        serializedName: "copyrights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CopyrightCaption: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyrightCaption",
    modelProperties: {
      formatVersion: {
        serializedName: "formatVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      copyrightsCaption: {
        serializedName: "copyrightsCaption",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Copyright: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Copyright",
    modelProperties: {
      formatVersion: {
        serializedName: "formatVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      generalCopyrights: {
        serializedName: "generalCopyrights",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      regions: {
        serializedName: "regions",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RegionCopyrights"
            }
          }
        }
      }
    }
  }
};

export const RegionCopyrights: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegionCopyrights",
    modelProperties: {
      copyrights: {
        serializedName: "copyrights",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      country: {
        serializedName: "country",
        type: {
          name: "Composite",
          className: "RegionCopyrightsCountry"
        }
      }
    }
  }
};

export const RegionCopyrightsCountry: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegionCopyrightsCountry",
    modelProperties: {
      iso3: {
        serializedName: "ISO3",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenderV2GetMapTileHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RenderV2GetMapTileHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenderV2GetMapStateTileHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RenderV2GetMapStateTileHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RenderV2GetMapStaticImageHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RenderV2GetMapStaticImageHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};