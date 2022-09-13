import ContainerService, {
  ContainerServiceClient,
  ManagedClustersCreateOrUpdateParameters,
  getLongRunningPoller,
  ManagedClustersCreateOrUpdate200Response,
  ManagedClustersCreateOrUpdate201Response,
  ManagedClustersCreateOrUpdatedefaultResponse,
} from "@azure-rest/arm-containerservice";
import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, PollOperationState } from "@azure/core-lro";

export type CreateOrUpdatePoller = PollerLike<
  PollOperationState<
    | ManagedClustersCreateOrUpdate200Response
    | ManagedClustersCreateOrUpdate201Response
    | ManagedClustersCreateOrUpdatedefaultResponse
  >,
  | ManagedClustersCreateOrUpdate200Response
  | ManagedClustersCreateOrUpdate201Response
  | ManagedClustersCreateOrUpdatedefaultResponse
>;

export type CreateOrUpdateLongRunningOperation = (
  resourceGroupName: string,
  subscriptionId: string,
  resourceName: string,
  input: ManagedClustersCreateOrUpdateParameters
) => Promise<CreateOrUpdatePoller>;


export async function createOrUpdateManagedClusters(context: ContainerServiceClient, resourceGroupName: string,
  subscriptionId: string,
  resourceName: string,
  input: ManagedClustersCreateOrUpdateParameters) {
    return await getCreateOrUpdateManagedClusters(context)(resourceGroupName, subscriptionId, resourceName, input);
  }

function getCreateOrUpdateManagedClusters(context: ContainerServiceClient): CreateOrUpdateLongRunningOperation {
  return async function (
    resourceGroupName: string,
    subscriptionId: string,
    resourceName: string,
    input: ManagedClustersCreateOrUpdateParameters
  ): Promise<CreateOrUpdatePoller> {
    const initialResponse = await context
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
        subscriptionId,
        resourceGroupName,
        resourceName
      )
      .put(input);

    return getLongRunningPoller(context, initialResponse);
  };
}

export default function createEnrichedClient(
  credentials: TokenCredential,
  options?: ClientOptions
): ContainerServiceClient & {
  createOrUpdateManagedClusters: CreateOrUpdateLongRunningOperation;
} {
  const client = ContainerService(credentials, options);
  return {
    ...client,
    createOrUpdateManagedClusters: getCreateOrUpdateManagedClusters(client),
  };
}
