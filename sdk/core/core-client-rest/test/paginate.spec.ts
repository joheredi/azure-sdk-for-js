import { assert } from "chai";
import { Client, getClient } from "../src";
import { paginate } from "../src/paginate";
import { PipelineResponse, createHttpHeaders } from "@azure/core-rest-pipeline";
import { URL } from "../src/url";
describe.only("Paginate heleper", () => {
  let client: Client;

  beforeEach(() => {
    client = getClient("http://localhost:3000", { allowInsecureConnection: true });
    client.pipeline.getOrderedPolicies().forEach(({ name }) => {
      client.pipeline.removePolicy({ name });
    });
  });

  it("Paging_getNoItemNamePages", async () => {
    // Paginate assumes the resource supports get and nextLink is an opaque url to which a get can be done
    // by default and following autorest x-ms-pageable extension, Paginate assumes that the pageable result
    // will contain a property nextLink which is the opaque url for the next page, and a value property containing
    // an array with the results (the page);
    const expectedPage = [{ foo: 1 }];
    mockResponse(client, [
      { path: "/paging/noitemname", response: { status: 200, body: { value: expectedPage } } },
    ]);
    const items = paginate(client, "/paging/noitemname");
    let result = [];
    for await (const item of items) {
      result.push(item);
    }

    assert.deepEqual(result, expectedPage);
  });

  it("Paging_getSinglePages", async () => {
    // Autorest x-ms-pageable extension allows setting a different name for the property that contains the page
    // we can allow overriding this through the pagingOptions values.
    // The extension also allows setting a custom nextLink property name.

    const expectedPage = [{ foo: 1 }];
    mockResponse(client, [
      { path: "/paging/single", response: { status: 200, body: { values: expectedPage } } },
    ]);

    const items = paginate(client, "/paging/single", { valuesName: "values" });
    let result = [];
    for await (const item of items) {
      result.push(item);
    }

    assert.deepEqual(result, expectedPage);
  });

  it("Paging_firstResponseEmpty", async () => {
    // First response has an empty [] next page contains a page with an element
    const expectedPage = [{ foo: 1 }];
    mockResponse(client, [
      {
        path: "/paging/firstResponseEmpty/1",
        response: { status: 200, body: { value: [], nextLink: "/paging/firstResponseEmpty/2" } },
      },
      {
        path: "/paging/firstResponseEmpty/2",
        response: { status: 200, body: { value: expectedPage } },
      },
    ]);

    const items = paginate(client, "/paging/firstResponseEmpty/1");
    let result = [];
    for await (const item of items) {
      result.push(item);
    }

    assert.deepEqual(result, expectedPage);
  });

  it("Paging_getMultiplePages", async () => {
    const expectedPages = [{ foo: 1 }, { foo: 2 }, { foo: 3 }];

    let mockResponses: MockResponse[] = [
      {
        path: "/paging/multiple",
        response: {
          status: 200,
          body: { value: [expectedPages[0]], nextLink: "/paging/multiple/1" },
        },
      },
      {
        path: "/paging/multiple/1",
        response: {
          status: 200,
          body: { value: [expectedPages[1]], nextLink: "/paging/multiple/2" },
        },
      },
      {
        path: "/paging/multiple/2",
        response: {
          status: 200,
          body: { value: [expectedPages[2]], nextLink: undefined },
        },
      },
    ];

    mockResponse(client, mockResponses);

    const items = paginate(client, "/paging/multiple");
    let result = [];
    for await (const item of items) {
      result.push(item);
    }

    assert.deepEqual(result, [...expectedPages]);
  });
});

interface MockResponse {
  path: string;
  response: {
    status: number;
    body: any;
  };
}

/**
 * Creates a pipeline with a mocked service call
 * @param client - client to mock requests for
 * @param response - Responses to return, the actual request url is matched to one of the paths in the responses and the defined object is returned.
 * if no path matches a 404 error is returned
 */
function mockResponse(client: Client, responses: MockResponse[]) {
  let count = 0;

  client.pipeline.addPolicy({
    name: "mockClient",
    sendRequest: async (request, _next): Promise<PipelineResponse> => {
      if (count < responses.length) {
        count++;
      }

      const path = new URL(request.url).pathname;

      const response = responses.find((r) => r.path === path);

      if (!response) {
        return {
          headers: createHttpHeaders(),
          request,
          status: 404,
        };
      }

      const { body, status } = response.response;
      const bodyAsText = JSON.stringify(body);
      return {
        headers: createHttpHeaders(),
        request,
        status,
        bodyAsText,
      };
    },
  });
}
