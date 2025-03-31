// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpClient } from "../interfaces.js";
import type { Pipeline } from "../pipeline.js";
import { createDefaultHttpClient } from "../defaultHttpClient.js";
import type { PipelineOptions } from "../createPipelineFromOptions.js";
import { createPipelineFromOptions } from "../createPipelineFromOptions.js";
import { apiKeyAuthenticationPolicy } from "../policies/auth/apiKeyAuthenticationPolicy.js";
import { basicAuthenticationPolicy } from "../policies/auth/basicAuthenticationPolicy.js";
import { bearerAuthenticationPolicy } from "../policies/auth/bearerAuthenticationPolicy.js";
import { oauth2AuthenticationPolicy } from "../policies/auth/oauth2AuthenticationPolicy.js";
import { isApiKeyCredential, isBasicCredential, isBearerTokenCredential, isOAuth2TokenCredential, type ClientCredential } from "../auth/credentials.js";
import type { AuthScheme } from "../auth/schemes.js";

let cachedHttpClient: HttpClient | undefined;

export interface CreatePipelineForClientOptions extends PipelineOptions {
  credential?: ClientCredential;
  authSchemes?: AuthScheme[];
  allowInsecureConnection?: boolean;
}

/**
 * Creates a default rest pipeline to re-use accross Rest Level Clients
 */
export function createDefaultPipeline(options: CreatePipelineForClientOptions = {}): Pipeline {
  const pipeline = createPipelineFromOptions(options);

  const { credential, authSchemes, allowInsecureConnection } = options;
  if (credential) {
    if (isApiKeyCredential(credential)) {
      pipeline.addPolicy(
        apiKeyAuthenticationPolicy({ authSchemes, credential, allowInsecureConnection }),
      );
    } else if (isBasicCredential(credential)) {
      pipeline.addPolicy(
        basicAuthenticationPolicy({ authSchemes, credential, allowInsecureConnection }),
      );
    } else if (isBearerTokenCredential(credential)) {
      pipeline.addPolicy(
        bearerAuthenticationPolicy({ authSchemes, credential, allowInsecureConnection }),
      );
    } else if (isOAuth2TokenCredential(credential)) {
      pipeline.addPolicy(
        oauth2AuthenticationPolicy({ authSchemes, credential, allowInsecureConnection }),
      );
    }
  }

  return pipeline;
}

export function getCachedDefaultHttpsClient(): HttpClient {
  if (!cachedHttpClient) {
    cachedHttpClient = createDefaultHttpClient();
  }

  return cachedHttpClient;
}
