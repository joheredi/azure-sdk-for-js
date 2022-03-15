let nock = require('nock');

module.exports.hash = "1490c466d5952f71c9cad6f46f7eb9d9";

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
  'c81d1636-153e-4d4c-b1e7-dbf6b6806000',
  'x-ms-ests-server',
  '2.1.12529.17 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=Aq4aZzvfH9tEj_rLG3SjkvY; expires=Sat, 09-Apr-2022 06:34:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrcY_icE9DIdxPQyJkQ7GjILw6c8_VKHtA_i60RPrw1eRl6qk-Yz8rwpBAR02leMjT-Jm2ceUPwd_OlKW417CGuD-pLR1zN-5bVxHtkQH-vWSuCLHWayLPvUQx76frlkx6_c0oaNbfSxLZ_NoTPqnaGET30F3liyJabpvfQcK5O3IgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT',
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
  '2143ae09-268b-454b-926f-d4ab311dc400',
  'x-ms-ests-server',
  '2.1.12529.17 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AqGpGuI4NcBGiKoYDJz9KGY; expires=Sat, 09-Apr-2022 06:34:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrC3blyy0YSjLD9tLdcPAYEQodE5BTzJ6EtKHRWniwBE_rJkVqcf3AXVrSzxdQ56iIPbjQOsVggTYJ3JaEXwm3BODaBy--cfWsOI8rEj2Z0cRPVlBUjTJj_-7EcOUd2K23t_qnMnT3NntImnjnR4SLYq83HUo3tD5CNEdlDuSPu10gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT',
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
  '8b464d37-6c39-4cef-aece-46a0408dd200',
  'x-ms-ests-server',
  '2.1.12529.17 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AmpyuBrjkwNPplLLdKSYLJY; expires=Sat, 09-Apr-2022 06:34:11 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrXlX_wJsA1xhPn9u8SVUxPfRihQyIyf2m_QOa-sHDYFUk9iTS4tsFsFvc30uvXpbZKYBrIvHo6SbziHPAIyzshB2Wl--3Eec75MVVlh_cUtQISOMcof2s_6Zzc6xNW3BqQbAy0ZLVKMJowRnWbvNHmYfD8_4YJOtoWWhIdzPZeiwgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=98153e51-1593-40f7-a866-2c412da999e3&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
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
  'c895d2c9-aae4-45b0-8bf5-273630eec200',
  'x-ms-ests-server',
  '2.1.12529.17 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=At1pBIiNxUxAtgN-JjK2Djqr4fIWAQAAAOOSu9kOAAAA; expires=Sat, 09-Apr-2022 06:34:12 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT',
  'Content-Length',
  '1319'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=1e727dc6-4725-47bc-99fc-3c12de0d9360&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
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
  'e7b8d486-8319-466d-ac21-176a9c6f1800',
  'x-ms-ests-server',
  '2.1.12559.4 - KRSLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AsCjDtFfRFxOloiZSO9EEmir4fIWAQAAAOOSu9kOAAAA; expires=Sat, 09-Apr-2022 06:34:12 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT',
  'Content-Length',
  '1319'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/nearby/json')
  .query(true)
  .reply(400, {"error":{"code":"400 BadRequest","message":"lat value should be between -90 and 90 inclusive"}}, [
  'Content-Length',
  '96',
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
  'Ref A: 067A90FC5F2A4672B6AF401F3CFA6E32 Ref B: TPE30EDGE0408 Ref C: 2022-03-10T06:34:12Z',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/nearby/json')
  .query(true)
  .reply(200, {"summary":{"queryType":"NEARBY","queryTime":43,"numResults":10,"offset":0,"totalResults":70432,"fuzzyLevel":1,"geoBias":{"lat":47.606038,"lon":-122.333345}},"results":[{"type":"POI","id":"840539001316525","score":99.9932861328,"dist":6.716018628498251,"info":"search:ta:840539001316525-US","poi":{"name":"Madison St & 4th Ave","categorySet":[{"id":9942002}],"categories":["bus stop","public transport stop"],"classifications":[{"code":"PUBLIC_TRANSPORT_STOP","names":[{"nameLocale":"en-US","name":"bus stop"},{"nameLocale":"en-US","name":"public transport stop"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60598,"lon":-122.33337},"viewport":{"topLeftPoint":{"lat":47.60688,"lon":-122.3347},"btmRightPoint":{"lat":47.60508,"lon":-122.33204}},"entryPoints":[{"type":"main","position":{"lat":47.60592,"lon":-122.33334}}]},{"type":"POI","id":"840539003078694","score":99.9807510376,"dist":19.251660747999768,"info":"search:ta:840539003078694-US","poi":{"name":"Re/Max Of America","phone":"+1 206-780-6000","brands":[{"name":"Re/Max of America"}],"categorySet":[{"id":9361015}],"url":"www.remax.com","categories":["real estate agents","shop"],"classifications":[{"code":"SHOP","names":[{"nameLocale":"en-US","name":"shop"},{"nameLocale":"en-US","name":"real estate agents"}]}]},"address":{"streetNumber":"290","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"290 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60588,"lon":-122.33345},"viewport":{"topLeftPoint":{"lat":47.60678,"lon":-122.33478},"btmRightPoint":{"lat":47.60498,"lon":-122.33212}},"entryPoints":[{"type":"main","position":{"lat":47.60588,"lon":-122.33345}}]},{"type":"POI","id":"840537000014398","score":99.9702606201,"dist":29.73928863199145,"info":"search:ta:840537000014398-US","poi":{"name":"Narrows Labs","phone":"+1 800-321-3579","categorySet":[{"id":9352}],"categories":["company"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1004","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1004 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60617,"lon":-122.333},"viewport":{"topLeftPoint":{"lat":47.60707,"lon":-122.33433},"btmRightPoint":{"lat":47.60527,"lon":-122.33167}},"entryPoints":[{"type":"main","position":{"lat":47.60617,"lon":-122.333}}]},{"type":"POI","id":"840539001096914","score":99.9702606201,"dist":29.73928863199145,"info":"search:ta:840539001096914-US","poi":{"name":"Darryl S Vhugen","phone":"+1 206-389-1673","categorySet":[{"id":9352023}],"categories":["company","legal services"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"legal services"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1001","streetName":"4Th Ave","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98185","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4Th Ave, Seattle, WA 98185","localName":"Seattle"},"position":{"lat":47.60617,"lon":-122.333},"viewport":{"topLeftPoint":{"lat":47.60707,"lon":-122.33433},"btmRightPoint":{"lat":47.60527,"lon":-122.33167}},"entryPoints":[{"type":"main","position":{"lat":47.60617,"lon":-122.333}}]},{"type":"POI","id":"840539003144366","score":99.967918396,"dist":32.078985643003946,"info":"search:ta:840539003144366-US","poi":{"name":"Espn Seattle","categorySet":[{"id":9158}],"categories":["media facility"],"classifications":[{"code":"MEDIA_FACILITY","names":[{"nameLocale":"en-US","name":"media facility"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60575,"lon":-122.33332},"viewport":{"topLeftPoint":{"lat":47.60665,"lon":-122.33465},"btmRightPoint":{"lat":47.60485,"lon":-122.33199}},"entryPoints":[{"type":"main","position":{"lat":47.60591,"lon":-122.33338}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YzkyNTJiNmFlNDUyMjRiMjU0OWVmOTc=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539000411206","score":99.9641952515,"dist":35.80670082469081,"info":"search:ta:840539000411206-US","poi":{"name":"1001 Fourth Avenue Place","categorySet":[{"id":9382}],"categories":["commercial building"],"classifications":[{"code":"COMMERCIAL_BUILDING","names":[{"nameLocale":"en-US","name":"commercial building"}]}]},"address":{"streetNumber":"1001","streetName":"4Th Ave","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4Th Ave, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60636,"lon":-122.33334},"viewport":{"topLeftPoint":{"lat":47.60726,"lon":-122.33467},"btmRightPoint":{"lat":47.60546,"lon":-122.33201}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840539000717400","score":99.9596939087,"dist":40.30957040295779,"info":"search:ta:840539000717400-US","poi":{"name":"Safeco Plaza Parking","phone":"+1 206-613-4214","categorySet":[{"id":7313}],"categories":["parking garage"],"classifications":[{"code":"PARKING_GARAGE","names":[{"nameLocale":"en-US","name":"parking garage"}]}]},"address":{"streetNumber":"342","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"342 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60622,"lon":-122.33381},"viewport":{"topLeftPoint":{"lat":47.60712,"lon":-122.33514},"btmRightPoint":{"lat":47.60532,"lon":-122.33248}},"entryPoints":[{"type":"main","position":{"lat":47.60603,"lon":-122.33308}}]},{"type":"POI","id":"840539001256790","score":99.9574890137,"dist":42.50751574385384,"info":"search:ta:840539001256790-US","poi":{"name":"4th Ave & Madison St","categorySet":[{"id":9942002}],"categories":["bus stop","public transport stop"],"classifications":[{"code":"PUBLIC_TRANSPORT_STOP","names":[{"nameLocale":"en-US","name":"bus stop"},{"nameLocale":"en-US","name":"public transport stop"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60607,"lon":-122.33278},"viewport":{"topLeftPoint":{"lat":47.60697,"lon":-122.33411},"btmRightPoint":{"lat":47.60517,"lon":-122.33145}},"entryPoints":[{"type":"main","position":{"lat":47.60615,"lon":-122.33281}}]},{"type":"POI","id":"840537000017097","score":99.9572525024,"dist":42.743782441314686,"info":"search:ta:840537000017097-US","poi":{"name":"Sipherd Burke Law","phone":"+1 206-400-7722","categorySet":[{"id":9352023}],"url":"www.sipherdburkelaw.com","categories":["company","legal services"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"legal services"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1001","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60595,"lon":-122.3339},"viewport":{"topLeftPoint":{"lat":47.60685,"lon":-122.33523},"btmRightPoint":{"lat":47.60505,"lon":-122.33257}},"entryPoints":[{"type":"main","position":{"lat":47.60573,"lon":-122.33381}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NGVhMzZmZDQ5OGUyYzA5MGExNThkYjA=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539002303490","score":99.9566574097,"dist":43.34260981768476,"info":"search:ta:840539002303490-US","poi":{"name":"Dolphin Technical Communication","phone":"+1 206-458-7327","categorySet":[{"id":9352002}],"categories":["company","service"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"service"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1021","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98154","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1021 4th Avenue, Seattle, WA 98154","localName":"Seattle"},"position":{"lat":47.60642,"lon":-122.33323},"viewport":{"topLeftPoint":{"lat":47.60732,"lon":-122.33456},"btmRightPoint":{"lat":47.60552,"lon":-122.3319}},"entryPoints":[{"type":"main","position":{"lat":47.60642,"lon":-122.33323}}]}]}, [
  'Content-Length',
  '10647',
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
  'Ref A: 3315C11FC5894E948A003B6476C5FED8 Ref B: TPE30EDGE0620 Ref C: 2022-03-10T06:34:12Z',
  'Date',
  'Thu, 10 Mar 2022 06:34:11 GMT'
]);