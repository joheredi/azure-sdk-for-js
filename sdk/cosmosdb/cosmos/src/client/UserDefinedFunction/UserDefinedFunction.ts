// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ClientContext } from "../../ClientContext";
import type { DiagnosticNodeInternal } from "../../diagnostics/DiagnosticNodeInternal";
import {
  createUserDefinedFunctionUri,
  getIdFromLink,
  getPathFromLink,
  isResourceValid,
  ResourceType,
} from "../../common";
import type { RequestOptions } from "../../request";
import type { Container } from "../Container";
import type { UserDefinedFunctionDefinition } from "./UserDefinedFunctionDefinition";
import { UserDefinedFunctionResponse } from "./UserDefinedFunctionResponse";
import { getEmptyCosmosDiagnostics, withDiagnostics } from "../../utils/diagnostics";

/**
 * Used to read, replace, or delete a specified User Definied Function by id.
 *
 * @see {@link UserDefinedFunction} to create, upsert, query, read all User Defined Functions.
 */
export class UserDefinedFunction {
  /**
   * Returns a reference URL to the resource. Used for linking in Permissions.
   */
  public get url(): string {
    return createUserDefinedFunctionUri(this.container.database.id, this.container.id, this.id);
  }
  /**
   * @hidden
   * @param container - The parent {@link Container}.
   * @param id - The id of the given {@link UserDefinedFunction}.
   */
  constructor(
    public readonly container: Container,
    public readonly id: string,
    private readonly clientContext: ClientContext,
  ) {}

  /**
   * Read the {@link UserDefinedFunctionDefinition} for the given {@link UserDefinedFunction}.
   */
  public async read(options?: RequestOptions): Promise<UserDefinedFunctionResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.read<UserDefinedFunctionDefinition>({
        path,
        resourceType: ResourceType.udf,
        resourceId: id,
        options,
        diagnosticNode,
      });
      return new UserDefinedFunctionResponse(
        response.result,
        response.headers,
        response.code,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Replace the given {@link UserDefinedFunction} with the specified {@link UserDefinedFunctionDefinition}.
   * @param options -
   */
  public async replace(
    body: UserDefinedFunctionDefinition,
    options?: RequestOptions,
  ): Promise<UserDefinedFunctionResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      if (body.body) {
        body.body = body.body.toString();
      }

      const err = {};
      if (!isResourceValid(body, err)) {
        throw err;
      }

      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.replace<UserDefinedFunctionDefinition>({
        body,
        path,
        resourceType: ResourceType.udf,
        resourceId: id,
        options,
        diagnosticNode,
      });
      return new UserDefinedFunctionResponse(
        response.result,
        response.headers,
        response.code,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Delete the given {@link UserDefined}.
   */
  public async delete(options?: RequestOptions): Promise<UserDefinedFunctionResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.delete({
        path,
        resourceType: ResourceType.udf,
        resourceId: id,
        options,
        diagnosticNode,
      });
      return new UserDefinedFunctionResponse(
        response.result,
        response.headers,
        response.code,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }
}
