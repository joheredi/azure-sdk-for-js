/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const RawCertificateData: msRest.CompositeMapper = {
  serializedName: "RawCertificateData",
  type: {
    name: "Composite",
    className: "RawCertificateData",
    modelProperties: {
      authType: {
        serializedName: "authType",
        type: {
          name: "String"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const CertificateRequest: msRest.CompositeMapper = {
  serializedName: "CertificateRequest",
  type: {
    name: "Composite",
    className: "CertificateRequest",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "RawCertificateData"
        }
      }
    }
  }
};

export const ResourceCertificateDetails: msRest.CompositeMapper = {
  serializedName: "ResourceCertificateDetails",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "authType",
      clientName: "authType"
    },
    uberParent: "ResourceCertificateDetails",
    className: "ResourceCertificateDetails",
    modelProperties: {
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      friendlyName: {
        serializedName: "friendlyName",
        type: {
          name: "String"
        }
      },
      issuer: {
        serializedName: "issuer",
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "Number"
        }
      },
      subject: {
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      thumbprint: {
        serializedName: "thumbprint",
        type: {
          name: "String"
        }
      },
      validFrom: {
        serializedName: "validFrom",
        type: {
          name: "DateTime"
        }
      },
      validTo: {
        serializedName: "validTo",
        type: {
          name: "DateTime"
        }
      },
      authType: {
        required: true,
        serializedName: "authType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCertificateAndAadDetails: msRest.CompositeMapper = {
  serializedName: "AzureActiveDirectory",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResourceCertificateDetails.type.polymorphicDiscriminator,
    uberParent: "ResourceCertificateDetails",
    className: "ResourceCertificateAndAadDetails",
    modelProperties: {
      ...ResourceCertificateDetails.type.modelProperties,
      aadAuthority: {
        required: true,
        serializedName: "aadAuthority",
        type: {
          name: "String"
        }
      },
      aadTenantId: {
        required: true,
        serializedName: "aadTenantId",
        type: {
          name: "String"
        }
      },
      servicePrincipalClientId: {
        required: true,
        serializedName: "servicePrincipalClientId",
        type: {
          name: "String"
        }
      },
      servicePrincipalObjectId: {
        required: true,
        serializedName: "servicePrincipalObjectId",
        type: {
          name: "String"
        }
      },
      azureManagementEndpointAudience: {
        required: true,
        serializedName: "azureManagementEndpointAudience",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCertificateAndAcsDetails: msRest.CompositeMapper = {
  serializedName: "AccessControlService",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResourceCertificateDetails.type.polymorphicDiscriminator,
    uberParent: "ResourceCertificateDetails",
    className: "ResourceCertificateAndAcsDetails",
    modelProperties: {
      ...ResourceCertificateDetails.type.modelProperties,
      globalAcsNamespace: {
        required: true,
        serializedName: "globalAcsNamespace",
        type: {
          name: "String"
        }
      },
      globalAcsHostName: {
        required: true,
        serializedName: "globalAcsHostName",
        type: {
          name: "String"
        }
      },
      globalAcsRPRealm: {
        required: true,
        serializedName: "globalAcsRPRealm",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultCertificateResponse: msRest.CompositeMapper = {
  serializedName: "VaultCertificateResponse",
  type: {
    name: "Composite",
    className: "VaultCertificateResponse",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceCertificateDetails"
        }
      }
    }
  }
};

export const JobsSummary: msRest.CompositeMapper = {
  serializedName: "JobsSummary",
  type: {
    name: "Composite",
    className: "JobsSummary",
    modelProperties: {
      failedJobs: {
        serializedName: "failedJobs",
        type: {
          name: "Number"
        }
      },
      suspendedJobs: {
        serializedName: "suspendedJobs",
        type: {
          name: "Number"
        }
      },
      inProgressJobs: {
        serializedName: "inProgressJobs",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MonitoringSummary: msRest.CompositeMapper = {
  serializedName: "MonitoringSummary",
  type: {
    name: "Composite",
    className: "MonitoringSummary",
    modelProperties: {
      unHealthyVmCount: {
        serializedName: "unHealthyVmCount",
        type: {
          name: "Number"
        }
      },
      unHealthyProviderCount: {
        serializedName: "unHealthyProviderCount",
        type: {
          name: "Number"
        }
      },
      eventsCount: {
        serializedName: "eventsCount",
        type: {
          name: "Number"
        }
      },
      deprecatedProviderCount: {
        serializedName: "deprecatedProviderCount",
        type: {
          name: "Number"
        }
      },
      supportedProviderCount: {
        serializedName: "supportedProviderCount",
        type: {
          name: "Number"
        }
      },
      unsupportedProviderCount: {
        serializedName: "unsupportedProviderCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ReplicationUsage: msRest.CompositeMapper = {
  serializedName: "ReplicationUsage",
  type: {
    name: "Composite",
    className: "ReplicationUsage",
    modelProperties: {
      monitoringSummary: {
        serializedName: "monitoringSummary",
        type: {
          name: "Composite",
          className: "MonitoringSummary"
        }
      },
      jobsSummary: {
        serializedName: "jobsSummary",
        type: {
          name: "Composite",
          className: "JobsSummary"
        }
      },
      protectedItemCount: {
        serializedName: "protectedItemCount",
        type: {
          name: "Number"
        }
      },
      recoveryPlanCount: {
        serializedName: "recoveryPlanCount",
        type: {
          name: "Number"
        }
      },
      registeredServersCount: {
        serializedName: "registeredServersCount",
        type: {
          name: "Number"
        }
      },
      recoveryServicesProviderAuthType: {
        serializedName: "recoveryServicesProviderAuthType",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDiscoveryDisplay: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryDisplay",
  type: {
    name: "Composite",
    className: "ClientDiscoveryDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDiscoveryForLogSpecification: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryForLogSpecification",
  type: {
    name: "Composite",
    className: "ClientDiscoveryForLogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDiscoveryForServiceSpecification: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryForServiceSpecification",
  type: {
    name: "Composite",
    className: "ClientDiscoveryForServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDiscoveryForLogSpecification"
            }
          }
        }
      }
    }
  }
};

export const ClientDiscoveryForProperties: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryForProperties",
  type: {
    name: "Composite",
    className: "ClientDiscoveryForProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ClientDiscoveryForServiceSpecification"
        }
      }
    }
  }
};

export const ClientDiscoveryValueForSingleApi: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryValueForSingleApi",
  type: {
    name: "Composite",
    className: "ClientDiscoveryValueForSingleApi",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ClientDiscoveryDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ClientDiscoveryForProperties"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "eTag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PatchTrackedResource: msRest.CompositeMapper = {
  serializedName: "PatchTrackedResource",
  type: {
    name: "Composite",
    className: "PatchTrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UpgradeDetails: msRest.CompositeMapper = {
  serializedName: "UpgradeDetails",
  type: {
    name: "Composite",
    className: "UpgradeDetails",
    modelProperties: {
      operationId: {
        readOnly: true,
        serializedName: "operationId",
        type: {
          name: "String"
        }
      },
      startTimeUtc: {
        readOnly: true,
        serializedName: "startTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTimeUtc: {
        readOnly: true,
        serializedName: "lastUpdatedTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      endTimeUtc: {
        readOnly: true,
        serializedName: "endTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      triggerType: {
        readOnly: true,
        serializedName: "triggerType",
        type: {
          name: "String"
        }
      },
      upgradedResourceId: {
        readOnly: true,
        serializedName: "upgradedResourceId",
        type: {
          name: "String"
        }
      },
      previousResourceId: {
        readOnly: true,
        serializedName: "previousResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IdentityData: msRest.CompositeMapper = {
  serializedName: "IdentityData",
  type: {
    name: "Composite",
    className: "IdentityData",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: msRest.CompositeMapper = {
  serializedName: "PrivateEndpoint",
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: msRest.CompositeMapper = {
  serializedName: "PrivateLinkServiceConnectionState",
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        readOnly: true,
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionVaultProperties: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionVaultProperties",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionVaultProperties",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateEndpointConnection"
        }
      }
    }
  }
};

export const VaultProperties: msRest.CompositeMapper = {
  serializedName: "VaultProperties",
  type: {
    name: "Composite",
    className: "VaultProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      upgradeDetails: {
        serializedName: "upgradeDetails",
        type: {
          name: "Composite",
          className: "UpgradeDetails"
        }
      },
      privateEndpointConnections: {
        readOnly: true,
        serializedName: "privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionVaultProperties"
            }
          }
        }
      },
      privateEndpointStateForBackup: {
        readOnly: true,
        serializedName: "privateEndpointStateForBackup",
        type: {
          name: "String"
        }
      },
      privateEndpointStateForSiteRecovery: {
        readOnly: true,
        serializedName: "privateEndpointStateForSiteRecovery",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Vault: msRest.CompositeMapper = {
  serializedName: "Vault",
  type: {
    name: "Composite",
    className: "Vault",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityData"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      }
    }
  }
};

export const PatchVault: msRest.CompositeMapper = {
  serializedName: "PatchVault",
  type: {
    name: "Composite",
    className: "PatchVault",
    modelProperties: {
      ...PatchTrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityData"
        }
      }
    }
  }
};

export const VaultExtendedInfoResource: msRest.CompositeMapper = {
  serializedName: "VaultExtendedInfoResource",
  type: {
    name: "Composite",
    className: "VaultExtendedInfoResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      integrityKey: {
        serializedName: "properties.integrityKey",
        type: {
          name: "String"
        }
      },
      encryptionKey: {
        serializedName: "properties.encryptionKey",
        type: {
          name: "String"
        }
      },
      encryptionKeyThumbprint: {
        serializedName: "properties.encryptionKeyThumbprint",
        type: {
          name: "String"
        }
      },
      algorithm: {
        serializedName: "properties.algorithm",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      groupId: {
        readOnly: true,
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        readOnly: true,
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        readOnly: true,
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameInfo: msRest.CompositeMapper = {
  serializedName: "NameInfo",
  type: {
    name: "Composite",
    className: "NameInfo",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultUsage: msRest.CompositeMapper = {
  serializedName: "VaultUsage",
  type: {
    name: "Composite",
    className: "VaultUsage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      quotaPeriod: {
        serializedName: "quotaPeriod",
        type: {
          name: "String"
        }
      },
      nextResetTime: {
        serializedName: "nextResetTime",
        type: {
          name: "DateTime"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "NameInfo"
        }
      }
    }
  }
};

export const ReplicationUsageList: msRest.CompositeMapper = {
  serializedName: "ReplicationUsageList",
  type: {
    name: "Composite",
    className: "ReplicationUsageList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReplicationUsage"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResources: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResources",
  type: {
    name: "Composite",
    className: "PrivateLinkResources",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultList: msRest.CompositeMapper = {
  serializedName: "VaultList",
  type: {
    name: "Composite",
    className: "VaultList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Vault"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDiscoveryResponse: msRest.CompositeMapper = {
  serializedName: "ClientDiscoveryResponse",
  type: {
    name: "Composite",
    className: "ClientDiscoveryResponse",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDiscoveryValueForSingleApi"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VaultUsageList: msRest.CompositeMapper = {
  serializedName: "VaultUsageList",
  type: {
    name: "Composite",
    className: "VaultUsageList",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VaultUsage"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'ResourceCertificateDetails.AzureActiveDirectory' : ResourceCertificateAndAadDetails,
  'ResourceCertificateDetails.AccessControlService' : ResourceCertificateAndAcsDetails,
  'ResourceCertificateDetails' : ResourceCertificateDetails

};
