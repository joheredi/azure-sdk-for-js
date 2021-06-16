import { assert } from "chai";
import { Client, getClient } from "../src";
import { beginOperation } from "../src/longRunningHelper";
describe("Paginate heleper", () => {
  let client: Client;

  beforeEach(() => {
    client = getClient("http://localhost:3000", { allowInsecureConnection: true });
  });

  it("LROs_put200Succeeded", async () => {
    const poller = beginOperation(client, "/lro/put/200/succeeded", "PUT", {requestOptions: {headers: {foo: "bar"}}});
    const result = await poller.pollUntilDone();
    assert.deepInclude(result.body, {id: "100", name: "foo"});
  });

  it("LROPutInlineComplete201", async () => {
    const poller = beginOperation(client, "/lro/put/201/succeeded", "PUT");
    const result = await poller.pollUntilDone();
    assert.deepInclude(result.body, {id: "100", name: "foo"});
  });

  it("/LROPostDoubleHeadersFinalAzureHeaderGet", async () => {
    const poller = beginOperation(client, "/lro/LROPostDoubleHeadersFinalAzureHeaderGet", "POST");
    const result = await poller.pollUntilDone();
    assert.deepInclude(result.body, {id: "100"});
  });
});
