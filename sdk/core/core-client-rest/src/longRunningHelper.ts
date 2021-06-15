import { Client } from "./getClient";
import { LROPoller, LROPollerOptions } from "./lro/lroPoller";
import { RequestParameters } from "./pathClientTypes";

export function beginOperation(
  client: Client,
  path: string,
  options: { pollerOptions?: LROPollerOptions; requestOptions?: RequestParameters } = {}
) {
  const { pollerOptions = {}, requestOptions = {} } = options;
  const sendOperation = (options: RequestParameters) => client.pathUnchecked(path).get(options);
  const poller = new LROPoller(pollerOptions, requestOptions, sendOperation);
}
