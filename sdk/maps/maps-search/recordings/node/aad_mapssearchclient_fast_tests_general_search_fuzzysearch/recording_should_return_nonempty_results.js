let nock = require('nock');

module.exports.hash = "e3cc0cc8623736b016f978eab9814f04";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '95bc3021-b587-4288-bed8-db4544d7bb01',
  'x-ms-ests-server',
  '2.1.12529.17 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AvPVZQWPF05MrTXYrywvhN8; expires=Sat, 09-Apr-2022 06:34:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrlg4NK_zcbgsHe-3vmdAkjIwhE0kCbQdHP4Pw_BvW2urCUfomCInxDX1nL_FqkmdsDVY5JAvX9INKklzQU7NXZIDhTfKmYc9dnni8Ks7Y_PUCfUXtCeJHFRNsqYpkpHZUijDKVb9AwUkRr6loElT2BxMfUsttMv6vslyLOZAit74gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:13 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"AS","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'd2250263-e934-4865-95a2-8e24a3609800',
  'x-ms-ests-server',
  '2.1.12529.17 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AgOJhSByDklErmZMS0S-nXs; expires=Sat, 09-Apr-2022 06:34:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrm5xlw5ntKUAKCTvzMVlYmGrM3Damm6y_h2_NRw7hPauSNaIAd4bxvm3zIcgMNcuQa-hBmC-DEqxTTm0yQSSLzdT8rC7wmwwsTx1Wy_pkLCl-m4DJ0uoLC1m2jI-diwxgHtFQz0VBhGWdSUDz6Up0u4WbpyHJXXQUyil73JLW9fggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:14 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"AS","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '620793db-a298-4cbc-af48-636fddedcf00',
  'x-ms-ests-server',
  '2.1.12529.17 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AlVuV1zDKb9Ghx2K9TJWUsw; expires=Sat, 09-Apr-2022 06:34:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrZ-y0NmJfbNmFD4Mv5x4ADemM5I9Y2vlZawzEml51sOxVR4qE4aVeIwXm1OJDCfbOLax6IeOeLRiAJJoRQ-iWNo_xLz-RH20pJZ-qSo1QrXyB8djyJoarUDlzYKNc0dI7OLcPp4HkK0czkYQ3NsMquiLEx_bdINI_Zo_IpKtTsVYgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:13 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=457b841d-627f-4300-b345-78bc32b6b7dc&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '1f6ebd07-503d-435d-8e0a-5067156c1600',
  'x-ms-ests-server',
  '2.1.12559.4 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AjzexIDYGcNHjDxybaMvUVSr4fIWAQAAAOWSu9kOAAAA; expires=Sat, 09-Apr-2022 06:34:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:14 GMT',
  'Content-Length',
  '1319'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=021b71d1-4656-477b-a2ed-de56aeb9f291&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '16e1b4e1-2b70-4247-bf37-52b71da5ca00',
  'x-ms-ests-server',
  '2.1.12529.17 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AhWpGnRX6lNDp6kLt74S0h4; expires=Sat, 09-Apr-2022 06:34:14 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:14 GMT',
  'Content-Length',
  '1319'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/fuzzy/json')
  .query(true)
  .reply(400, {"error":{"code":"400 BadRequest","message":"query is missing or empty"}}, [
  'Content-Length',
  '73',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 8914839112DE4A8DA3A80537F7052B24 Ref B: TPE30EDGE0415 Ref C: 2022-03-10T06:34:14Z',
  'Date',
  'Thu, 10 Mar 2022 06:34:13 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/fuzzy/json')
  .query(true)
  .reply(400, {"error":{"code":"400 BadRequest","message":"Invalid latitude. Latitude should be a float [-90, 90]."}}, [
  'Content-Length',
  '128',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 7C476A134DE6413DAA351FDE57C87F22 Ref B: TPE30EDGE0408 Ref C: 2022-03-10T06:34:14Z',
  'Date',
  'Thu, 10 Mar 2022 06:34:14 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/fuzzy/json')
  .query(true)
  .reply(200, {"summary":{"query":"restaurant","queryType":"NON_NEAR","queryTime":561,"numResults":10,"offset":0,"totalResults":6500611,"fuzzyLevel":1,"geoBias":{"lat":47.606038,"lon":-122.333345}},"results":[{"type":"POI","id":"840539001919770","score":2.5745272636,"dist":46.88885612108645,"info":"search:ta:840539001919770-US","poi":{"name":"La Vita E'Bella Pizzeria","phone":"+1 206-441-5123","categorySet":[{"id":7315036}],"url":"www.lavitaebella.us","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1001","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98154","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4th Avenue, Seattle, WA 98154","localName":"Seattle"},"position":{"lat":47.60632,"lon":-122.33381},"viewport":{"topLeftPoint":{"lat":47.60722,"lon":-122.33514},"btmRightPoint":{"lat":47.60542,"lon":-122.33248}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840539003103766","score":2.5745265484,"dist":58.03771624292174,"info":"search:ta:840539003103766-US","poi":{"name":"Belle Epicurean","phone":"+1 206-262-9306","categorySet":[{"id":7315017}],"url":"www.belleepicurean.com","categories":["french","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"french"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"925","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1106","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"925 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60552,"lon":-122.33325},"viewport":{"topLeftPoint":{"lat":47.60642,"lon":-122.33458},"btmRightPoint":{"lat":47.60462,"lon":-122.33192}},"entryPoints":[{"type":"main","position":{"lat":47.60578,"lon":-122.33264}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1YTUzYjEzYjMyYjYxZDU5ZjRkYzg3YTI=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539000089874","score":2.5745265484,"dist":58.03771624292174,"info":"search:ta:840539000089874-US","poi":{"name":"Sushi Kudasai","phone":"+1 206-623-8080","categorySet":[{"id":7315148}],"url":"www.sushikudasaiseattle.com/","categories":["restaurant","sushi"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"sushi"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"925","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1106","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"925 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60552,"lon":-122.33325},"viewport":{"topLeftPoint":{"lat":47.60642,"lon":-122.33458},"btmRightPoint":{"lat":47.60462,"lon":-122.33192}},"entryPoints":[{"type":"main","position":{"lat":47.60578,"lon":-122.33264}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MDg1YWMwZmU0YjBhNDQ3NTAwYjE4MDM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539001115354","score":2.5745253563,"dist":87.93982774588119,"info":"search:ta:840539001115354-US","poi":{"name":"Cafe Loc","phone":"+1 206-386-4692","categorySet":[{"id":7315}],"categories":["restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"1000","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1109","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1000 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60668,"lon":-122.33266},"viewport":{"topLeftPoint":{"lat":47.60758,"lon":-122.33399},"btmRightPoint":{"lat":47.60578,"lon":-122.33133}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840531000371626","score":2.5745248795,"dist":97.61714945967063,"info":"search:ta:840531000371626-US","poi":{"name":"Ricenroll","phone":"+1 206-262-0381","categorySet":[{"id":7315148}],"url":"www.ricenroll.com","categories":["restaurant","sushi"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"sushi"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"214","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"214 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60562,"lon":-122.33449},"viewport":{"topLeftPoint":{"lat":47.60652,"lon":-122.33582},"btmRightPoint":{"lat":47.60472,"lon":-122.33316}},"entryPoints":[{"type":"main","position":{"lat":47.60549,"lon":-122.33436}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YjQ2NTk5NmY5NjRhNTIwNWQxZTI2ZTM=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003183394","score":2.5745248795,"dist":96.9555165871904,"info":"search:ta:840539003183394-US","poi":{"name":"Vovito Espresso Gelato Bar","phone":"+1 206-403-1115","categorySet":[{"id":7315078}],"url":"vovito.com","categories":["ice cream parlor","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"ice cream parlor"}]}]},"address":{"streetNumber":"1100","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-3004","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1100 4th Avenue, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.60689,"lon":-122.33362},"viewport":{"topLeftPoint":{"lat":47.60779,"lon":-122.33495},"btmRightPoint":{"lat":47.60599,"lon":-122.33229}},"entryPoints":[{"type":"main","position":{"lat":47.6072,"lon":-122.33395}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1MjE2Mjk2YTExZDI3M2ZlNWI3N2M3MjE=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539003065656","score":2.574524641,"dist":100.3708594951675,"info":"search:ta:840539003065656-US","poi":{"name":"Matthew Hoffman","phone":"+1 206-701-2000","categorySet":[{"id":7315042}],"categories":["restaurant","sandwich"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"sandwich"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"901","streetName":"5th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1608","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"901 5th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60597,"lon":-122.33201},"viewport":{"topLeftPoint":{"lat":47.60687,"lon":-122.33334},"btmRightPoint":{"lat":47.60507,"lon":-122.33068}},"entryPoints":[{"type":"main","position":{"lat":47.60619,"lon":-122.33147}}]},{"type":"POI","id":"840539002387758","score":2.574524641,"dist":101.35431355228451,"info":"search:ta:840539002387758-US","poi":{"name":"DC's Bar & Grill","phone":"+1 206-914-8451","categorySet":[{"id":7315020}],"categories":["grill","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"grill"}]}]},"address":{"streetNumber":"907","streetName":"3rd Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1602","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"907 3rd Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60515,"lon":-122.33365},"viewport":{"topLeftPoint":{"lat":47.60605,"lon":-122.33498},"btmRightPoint":{"lat":47.60425,"lon":-122.33232}},"entryPoints":[{"type":"main","position":{"lat":47.60515,"lon":-122.33365}}]},{"type":"POI","id":"840537000017162","score":2.5745234489,"dist":118.5220882059273,"info":"search:ta:840537000017162-US","poi":{"name":"The Lodge Sports Grille-Downtown","phone":"+1 206-557-7360","categorySet":[{"id":7315003}],"url":"thelodgesportsgrille.com","categories":["american","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"american"}]}]},"address":{"streetNumber":"1102","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98101","extendedPostalCode":"98101-3004","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1102 4th Avenue, Seattle, WA 98101","localName":"Seattle"},"position":{"lat":47.6071,"lon":-122.33348},"viewport":{"topLeftPoint":{"lat":47.608,"lon":-122.33481},"btmRightPoint":{"lat":47.6062,"lon":-122.33215}},"entryPoints":[{"type":"main","position":{"lat":47.60699,"lon":-122.33375}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NDI3NTc1OTQ5OGU5NmJmZGY3MzliMzA=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840531000475812","score":2.5745222569,"dist":129.68130419307732,"info":"search:ta:840531000475812-US","poi":{"name":"Atlantic Street Pizza","phone":"+1 206-624-7200","categorySet":[{"id":7315036}],"url":"atlanticstreetpizza.com/","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"999","streetName":"3rd Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-1105","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"999 3rd Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60504,"lon":-122.33424},"viewport":{"topLeftPoint":{"lat":47.60594,"lon":-122.33557},"btmRightPoint":{"lat":47.60414,"lon":-122.33291}},"entryPoints":[{"type":"main","position":{"lat":47.60525,"lon":-122.33374}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YWJhNzNjMWY5NjRhNTIwNjE4MTIwZTM=","sourceName":"Foursquare"}]}}]}, [
  'Content-Length',
  '11625',
  'Content-Type',
  'application/json; charset=utf-8',
  'Vary',
  'Accept-Encoding',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 60AE83A6AC9C4A3C9D93F2350C7ED206 Ref B: TPE30EDGE0620 Ref C: 2022-03-10T06:34:14Z',
  'Date',
  'Thu, 10 Mar 2022 06:34:14 GMT'
]);