let nock = require('nock');

module.exports.hash = "6af143625dba0cb7164031e1c108e51b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://joherediteststorage.table.core.windows.net:443', {"encodedQueryParams":true})
  .post('/integration', {"PartitionKey":"P1","RowKey":"R1","name":"testEntity"})
  .query(true)
  .reply(201, {"odata.metadata":"https://joherediteststorage.table.core.windows.net/$metadata#integration/@Element","odata.etag":"W/\"datetime'2020-08-15T00%3A38%3A16.4069924Z'\"","PartitionKey":"P1","RowKey":"R1","Timestamp":"2020-08-15T00:38:16.4069924Z","name":"testEntity"}, [
  'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  'ETag',
  `W/"datetime'2020-08-15T00%3A38%3A16.4069924Z'"`,
  'Location',
  "https://joherediteststorage.table.core.windows.net/integration(PartitionKey='P1',RowKey='R1')",
  'Server',
  'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7a8a5681-9002-007d-5d9c-72c81c000000',
  'x-ms-version',
  '2019-02-02',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Sat, 15 Aug 2020 00:38:15 GMT',
  'Connection',
  'close'
]);
