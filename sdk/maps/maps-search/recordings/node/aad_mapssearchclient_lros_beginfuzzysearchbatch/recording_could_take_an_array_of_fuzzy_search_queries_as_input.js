let nock = require('nock');

module.exports.hash = "dc34de3987fdb3fd6acb9b0c2a69b436";

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
  'c96138c1-887d-45c6-b7f5-4887f5431700',
  'x-ms-ests-server',
  '2.1.12507.13 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Aux_nWDdo6BJogeJTTEKsyY; expires=Thu, 24-Mar-2022 10:21:47 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrwsb7nNzXq9P1bO_ggJfWlFdZDMfSnjdvggvanyPWh_h-yE3ShcBPDXUkNb6w8yb_M6NtK43NaD8YNCjvieT0MBuIv1nMgT4Y_Kp5WOX4YPYO9qx3JQGe-Pxcpvp8aF4WDI4kIS3xb_jH6NLJKRaJUFrxVBmwut8e0xwr2_XBJxkgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT',
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
  'dded5f18-1f70-485d-9491-4ebbdbe69000',
  'x-ms-ests-server',
  '2.1.12470.11 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AhcOLjz6hn1Ju8PkD-9lqgY; expires=Thu, 24-Mar-2022 10:21:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr3gYy7-2jFDAcSCvQAFonf1Jm7LNH0Yy2ieelrnLRb56TprB3_xxP1yAGOzQYq5zI45BePiXGOcD9AwAouaBfmHembzOA4WfKkiMQnUIL23mifeIByL0HOMo4s6uOBZRgoADooni2Fj2toue0QEeFw9lMbj8ZxM1sKu_eEbx_afggAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT',
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
  'b545e638-12c5-4077-aff4-b035be1da200',
  'x-ms-ests-server',
  '2.1.12470.11 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=AgHNCMoJTu9EpuMtSdYUnYs; expires=Thu, 24-Mar-2022 10:21:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrTdRCTWI0GWb5e3lXpnWpcMljrbYyUGameXKK577L1_9egJLF1XVdkc8HsAGRE_qC2ER4dgahNS_F_ar5ohzOd8quWO9upaP6tNgHqdRXcCNNXUpZQBT6tLvepX1KaBLIEFIZzocbijRZThQSdoB_afIWzp5iB2vgk_4ksuOXOHwgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=843b2409-da46-49cd-9a1c-3698e9bec25f&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
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
  '62ad4de4-ec93-45a7-9ded-61ccbca4a600',
  'x-ms-ests-server',
  '2.1.12470.11 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AvixskD1u5VBhtN4cj1TVc-r4fIWAQAAADuwptkOAAAA; expires=Thu, 24-Mar-2022 10:21:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT',
  'Content-Length',
  '1319'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.5.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=17e448fd-80ab-4893-bf0c-9f0a39998800&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
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
  '6899a10f-a79f-4b72-86f0-da2393009700',
  'x-ms-ests-server',
  '2.1.12470.11 - KRSLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AiNwKuQ1ogRPnOfCCWb3ZxCr4fIWAQAAADuwptkOAAAA; expires=Thu, 24-Mar-2022 10:21:48 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT',
  'Content-Length',
  '1319'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/search/fuzzy/batch/json', {"batchItems":[]})
  .query(true)
  .reply(400, {"error":{"code":"400 BadRequest","message":"Number of queries must be between 1 and 10000 inclusive."}}, [
  'Content-Length',
  '104',
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
  'Ref A: 7AA73F2BD88C45C9AE8BA5964BFA104D Ref B: TYO01EDGE1715 Ref C: 2022-02-22T10:21:48Z',
  'Date',
  'Tue, 22 Feb 2022 10:21:48 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/search/fuzzy/batch/json', {"batchItems":[{"query":"?query=pizza&countrySet=fr"},{"query":"?query=pizza&lat=25&lon=121"},{"query":"?query=pizza&lat=25&lon=121&countrySet=tw"}]})
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '2',
  'Content-Type',
  'application/json; charset=utf-8',
  'Location',
  'https://atlas.microsoft.com/search/fuzzy/batch/<batch-id>?api-version=1.0',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: 262AE0127C8241479389A201C321B44B Ref B: TYBEDGE0409 Ref C: 2022-02-22T10:21:48Z',
  'Date',
  'Tue, 22 Feb 2022 10:21:47 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/fuzzy/batch/<batch-id>')
  .query(true)
  .reply(200, {"batchItems":[{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":50,"numResults":10,"offset":0,"totalResults":19729,"fuzzyLevel":1},"results":[{"type":"POI","id":"250009008095740","score":2.1454398632,"info":"search:ta:250009008095740-FR","poi":{"name":"Presto Pizza","phone":"+33 3 89 39 20 34","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"32","streetName":"Rue du Général de Gaulle","municipalitySubdivision":"Masevaux","municipality":"Masevaux-Niederbruck","countrySecondarySubdivision":"Haut-Rhin","countrySubdivision":"Grand-Est","postalCode":"68290","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"32 Rue du Général de Gaulle, 68290 Masevaux-Niederbruck","localName":"Masevaux-Niederbruck"},"position":{"lat":47.77435,"lon":6.99796},"viewport":{"topLeftPoint":{"lat":47.77525,"lon":6.99662},"btmRightPoint":{"lat":47.77345,"lon":6.9993}},"entryPoints":[{"type":"main","position":{"lat":47.7742,"lon":6.9979}}]},{"type":"POI","id":"250009007951780","score":2.1454398632,"info":"search:ta:250009007951780-FR","poi":{"name":"Le Bocaccio","phone":"+33 3 88 37 11 51","categorySet":[{"id":7315036}],"url":"www.leboccaccio.fr","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetName":"Rue Finkwiller","municipality":"Strasbourg","countrySecondarySubdivision":"Lower Rhine","countrySubdivision":"Great East","postalCode":"67000","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Rue Finkwiller, 67000 Strasbourg","localName":"Strasbourg"},"position":{"lat":48.57919,"lon":7.7421},"viewport":{"topLeftPoint":{"lat":48.58009,"lon":7.74074},"btmRightPoint":{"lat":48.57829,"lon":7.74346}},"entryPoints":[{"type":"main","position":{"lat":48.57892,"lon":7.74196}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YzA5NTQ5YWZmYjhjOWI2MGJiYjY5NjE=","sourceName":"Foursquare"}]}},{"type":"POI","id":"250009007987034","score":2.1454398632,"info":"search:ta:250009007987034-FR","poi":{"name":"Kiosques à Pizzas","phone":"+33 3 26 09 33 55","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"456","streetName":"Avenue de Laon","municipalitySubdivision":"La Neuvillette","municipality":"Reims","countrySecondarySubdivision":"Marne","countrySubdivision":"Grand-Est","postalCode":"51100","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"456 Avenue de Laon, 51100 Reims","localName":"Reims"},"position":{"lat":49.28021,"lon":4.01364},"viewport":{"topLeftPoint":{"lat":49.28111,"lon":4.01226},"btmRightPoint":{"lat":49.27931,"lon":4.01502}},"entryPoints":[{"type":"main","position":{"lat":49.28018,"lon":4.01356}}]},{"type":"POI","id":"250009008106795","score":2.1454398632,"info":"search:ta:250009008106795-FR","poi":{"name":"Pizzeria Le Napoli","phone":"+33 3 87 07 81 77","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"124","streetName":"Rue Principale","municipality":"Berthelming","countrySecondarySubdivision":"Moselle","countrySubdivision":"Grand-Est","postalCode":"57930","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"124 Rue Principale, 57930 Berthelming","localName":"Berthelming"},"position":{"lat":48.8186,"lon":7.0088},"viewport":{"topLeftPoint":{"lat":48.8195,"lon":7.00743},"btmRightPoint":{"lat":48.8177,"lon":7.01017}},"entryPoints":[{"type":"main","position":{"lat":48.81857,"lon":7.00884}}]},{"type":"POI","id":"250009008007538","score":2.1454398632,"info":"search:ta:250009008007538-FR","poi":{"name":"Mac and Pizz","phone":"+33 3 29 53 30 35","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"182","streetName":"Rue Ernest Charlier","municipality":"Sainte-Marguerite","countrySecondarySubdivision":"Vosges","countrySubdivision":"Grand-Est","postalCode":"88100","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"182 Rue Ernest Charlier, 88100 Sainte-Marguerite","localName":"Sainte-Marguerite"},"position":{"lat":48.27283,"lon":6.96934},"viewport":{"topLeftPoint":{"lat":48.27373,"lon":6.96799},"btmRightPoint":{"lat":48.27193,"lon":6.97069}},"entryPoints":[{"type":"main","position":{"lat":48.27335,"lon":6.96841}}]},{"type":"POI","id":"250009004304147","score":2.1454398632,"info":"search:ta:250009004304147-FR","poi":{"name":"Pizzeria San Remo","phone":"+33 3 29 56 69 79","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetName":"Rue Ernest Charlier","municipality":"Sainte-Marguerite","countrySecondarySubdivision":"Vosges","countrySubdivision":"Grand-Est","postalCode":"88100","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Rue Ernest Charlier, 88100 Sainte-Marguerite","localName":"Sainte-Marguerite"},"position":{"lat":48.27438,"lon":6.96622},"viewport":{"topLeftPoint":{"lat":48.27528,"lon":6.96487},"btmRightPoint":{"lat":48.27348,"lon":6.96757}},"entryPoints":[{"type":"main","position":{"lat":48.27438,"lon":6.96622}}]},{"type":"POI","id":"250009041045222","score":2.1454398632,"info":"search:ta:250009041045222-FR","poi":{"name":"La Boite a pizza","phone":"+33 3 87 36 20 20","categorySet":[{"id":7315036}],"url":"www.laboiteapizza.com/","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"219B","streetName":"Avenue de Strasbourg","municipality":"Metz","countrySecondarySubdivision":"Moselle","countrySubdivision":"Grand-Est","postalCode":"57070","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"219B Avenue de Strasbourg, 57070 Metz","localName":"Metz"},"position":{"lat":49.10363,"lon":6.21186},"viewport":{"topLeftPoint":{"lat":49.10453,"lon":6.21049},"btmRightPoint":{"lat":49.10273,"lon":6.21323}},"entryPoints":[{"type":"main","position":{"lat":49.10361,"lon":6.2118}}]},{"type":"POI","id":"250001002017870","score":2.1454398632,"info":"search:ta:250001002017870-FR","poi":{"name":"Star Pizza","phone":"+33 3 87 02 53 44","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"36","streetName":"Rue Victor Hugo","municipality":"Hundling","countrySecondarySubdivision":"Moselle","countrySubdivision":"Grand-Est","postalCode":"57990","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"36 Rue Victor Hugo, 57990 Hundling","localName":"Hundling"},"position":{"lat":49.10705,"lon":6.97822},"viewport":{"topLeftPoint":{"lat":49.10795,"lon":6.97685},"btmRightPoint":{"lat":49.10615,"lon":6.97959}},"entryPoints":[{"type":"main","position":{"lat":49.10691,"lon":6.97749}}]},{"type":"POI","id":"250009041031285","score":2.1454398632,"info":"search:ta:250009041031285-FR","poi":{"name":"La Petite 500","phone":"+33 3 87 13 06 62","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"147","streetName":"Rue Nationale","municipality":"Stiring-Wendel","countrySecondarySubdivision":"Moselle","countrySubdivision":"Grand-Est","postalCode":"57350","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"147 Rue Nationale, 57350 Stiring-Wendel","localName":"Stiring-Wendel"},"position":{"lat":49.20331,"lon":6.95094},"viewport":{"topLeftPoint":{"lat":49.20421,"lon":6.94956},"btmRightPoint":{"lat":49.20241,"lon":6.95232}},"entryPoints":[{"type":"main","position":{"lat":49.20336,"lon":6.95163}}]},{"type":"POI","id":"250009003052620","score":2.1454398632,"info":"search:ta:250009003052620-FR","poi":{"name":"Délice de la Laiterie","phone":"+33 3 88 32 77 70","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"25","streetName":"Rue de Molsheim","municipality":"Strasbourg","countrySecondarySubdivision":"Lower Rhine","countrySubdivision":"Great East","postalCode":"67000","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"25 Rue de Molsheim, 67000 Strasbourg","localName":"Strasbourg"},"position":{"lat":48.57589,"lon":7.73164},"viewport":{"topLeftPoint":{"lat":48.57679,"lon":7.73028},"btmRightPoint":{"lat":48.57499,"lon":7.733}},"entryPoints":[{"type":"main","position":{"lat":48.57599,"lon":7.73144}}]}]}},{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":141,"numResults":10,"offset":0,"totalResults":377407,"fuzzyLevel":1,"geoBias":{"lat":25,"lon":121}},"results":[{"type":"POI","id":"158009002150213","score":2.5349180698,"dist":11344.607999926191,"info":"search:ta:158009002150213-TW","poi":{"name":"Pizza Hut Hsinchu Hukou Store","phone":"+886 3 590 6000","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"79","streetName":"Chenggong Road","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"79, Chenggong Road, Hukou Township, Hsinchu County 303","localName":"Hukou Township"},"position":{"lat":24.90616,"lon":121.04416},"viewport":{"topLeftPoint":{"lat":24.90706,"lon":121.04317},"btmRightPoint":{"lat":24.90526,"lon":121.04515}},"entryPoints":[{"type":"main","position":{"lat":24.90617,"lon":121.04415}}]},{"type":"POI","id":"158009002168123","score":2.5341627598,"dist":11457.765315943818,"info":"search:ta:158009002168123-TW","poi":{"name":"Pizza Hut Taoyuan Xinwu Store","phone":"+886 3 497 0856","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"166","streetName":"Zhongshan Road","municipalitySubdivision":"Xinwu District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"327","extendedPostalCode":"32748","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"166, Zhongshan Road, Xinwu District, Taoyuan City 32748","localName":"Xinwu District"},"position":{"lat":24.97186,"lon":121.10936},"viewport":{"topLeftPoint":{"lat":24.97276,"lon":121.10837},"btmRightPoint":{"lat":24.97096,"lon":121.11035}},"entryPoints":[{"type":"main","position":{"lat":24.97178,"lon":121.1093}}]},{"type":"POI","id":"158009002154753","score":2.5293753147,"dist":12155.128902623723,"info":"search:ta:158009002154753-TW","poi":{"name":"Domino's Pizza Hukou Zhongzheng Restaurant","phone":"+886 3 590 5000","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"219","streetName":"Zhongzheng Road Section 1","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","extendedPostalCode":"30342","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"219, Zhongzheng Road Section 1, Hukou Township, Hsinchu County 30342","localName":"Hukou Township"},"position":{"lat":24.89952,"lon":121.04748},"viewport":{"topLeftPoint":{"lat":24.90042,"lon":121.04649},"btmRightPoint":{"lat":24.89862,"lon":121.04847}},"entryPoints":[{"type":"main","position":{"lat":24.89949,"lon":121.04738}}]},{"type":"POI","id":"158009002155612","score":2.5136804581,"dist":14255.151925689343,"info":"search:ta:158009002155612-TW","poi":{"name":"Pizza Hut Taoyuan Guanyin Store","phone":"+886 3 498 2118","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"907","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"907, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00985,"lon":121.14104},"viewport":{"topLeftPoint":{"lat":25.01075,"lon":121.14005},"btmRightPoint":{"lat":25.00895,"lon":121.14203}},"entryPoints":[{"type":"main","position":{"lat":25.00987,"lon":121.14097}}]},{"type":"POI","id":"158009002165414","score":2.5127086639,"dist":14377.7749022998,"info":"search:ta:158009002165414-TW","poi":{"name":"Domino's Pizza Guanyin Xinpo Store","phone":"+886 3 498 5822","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"967","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"967, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00911,"lon":121.14232},"viewport":{"topLeftPoint":{"lat":25.01001,"lon":121.14133},"btmRightPoint":{"lat":25.00821,"lon":121.14331}},"entryPoints":[{"type":"main","position":{"lat":25.00902,"lon":121.14225}}]},{"type":"POI","id":"158009001318102","score":2.5112905502,"dist":14555.434957206897,"info":"search:ta:158009001318102-TW","poi":{"name":"拿坡里新豐店","phone":"+886 3 559 0588","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"189-1","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"189-1, 新興路, 新豐鄉, 新竹縣 304","localName":"新豐鄉"},"position":{"lat":24.86917,"lon":120.99528},"viewport":{"topLeftPoint":{"lat":24.87007,"lon":120.99429},"btmRightPoint":{"lat":24.86827,"lon":120.99627}},"entryPoints":[{"type":"main","position":{"lat":24.86907,"lon":120.99537}}]},{"type":"POI","id":"158009002152801","score":2.5110216141,"dist":14588.988689531341,"info":"search:ta:158009002152801-TW","poi":{"name":"Pizza Hut Hsinchu Xinfeng Store","phone":"+886 3 559 9111","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"171, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86889,"lon":120.99459},"viewport":{"topLeftPoint":{"lat":24.86979,"lon":120.9936},"btmRightPoint":{"lat":24.86799,"lon":120.99558}},"entryPoints":[{"type":"main","position":{"lat":24.86864,"lon":120.99483}}]},{"type":"POI","id":"158009001725073","score":2.5108249187,"dist":14613.472220701267,"info":"search:ta:158009001725073-TW","poi":{"name":"比薩家族50元比薩 新竹新豐店","phone":"+886 3 559 9095","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"171, 新興路, 新豐鄉, 新竹縣 30444","localName":"新豐鄉"},"position":{"lat":24.86867,"lon":120.99458},"viewport":{"topLeftPoint":{"lat":24.86957,"lon":120.99359},"btmRightPoint":{"lat":24.86777,"lon":120.99557}},"entryPoints":[{"type":"main","position":{"lat":24.86854,"lon":120.9947}}]},{"type":"POI","id":"158009002166980","score":2.5100557804,"dist":14708.95915754533,"info":"search:ta:158009002166980-TW","poi":{"name":"Domino's Pizza Xinfeng Xinxing Restaurant","phone":"+886 3 557 6611","brands":[{"name":"Domino's Pizza"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"146-15","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"146-15, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86782,"lon":120.99431},"viewport":{"topLeftPoint":{"lat":24.86872,"lon":120.99332},"btmRightPoint":{"lat":24.86692,"lon":120.9953}},"entryPoints":[{"type":"main","position":{"lat":24.86797,"lon":120.99415}}]},{"type":"POI","id":"158009001316049","score":2.4848582745,"dist":17649.691992150107,"info":"search:ta:158009001316049-TW","poi":{"name":"拿坡里楊梅店","phone":"+886 3 475 0200","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"184","streetName":"Dacheng Road","municipalitySubdivision":"Yangmei District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"326","extendedPostalCode":"32643","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"184, Dacheng Road, Yangmei District, Taoyuan City 32643","localName":"Yangmei District"},"position":{"lat":24.91224,"lon":121.14588},"viewport":{"topLeftPoint":{"lat":24.91314,"lon":121.14489},"btmRightPoint":{"lat":24.91134,"lon":121.14687}},"entryPoints":[{"type":"main","position":{"lat":24.91224,"lon":121.14578}}]}]}},{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":49,"numResults":10,"offset":0,"totalResults":994,"fuzzyLevel":1,"geoBias":{"lat":25,"lon":121}},"results":[{"type":"POI","id":"158009002150213","score":2.5349180698,"dist":11344.607999926191,"info":"search:ta:158009002150213-TW","poi":{"name":"Pizza Hut Hsinchu Hukou Store","phone":"+886 3 590 6000","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"79","streetName":"Chenggong Road","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"79, Chenggong Road, Hukou Township, Hsinchu County 303","localName":"Hukou Township"},"position":{"lat":24.90616,"lon":121.04416},"viewport":{"topLeftPoint":{"lat":24.90706,"lon":121.04317},"btmRightPoint":{"lat":24.90526,"lon":121.04515}},"entryPoints":[{"type":"main","position":{"lat":24.90617,"lon":121.04415}}]},{"type":"POI","id":"158009002168123","score":2.5341627598,"dist":11457.765315943818,"info":"search:ta:158009002168123-TW","poi":{"name":"Pizza Hut Taoyuan Xinwu Store","phone":"+886 3 497 0856","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"166","streetName":"Zhongshan Road","municipalitySubdivision":"Xinwu District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"327","extendedPostalCode":"32748","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"166, Zhongshan Road, Xinwu District, Taoyuan City 32748","localName":"Xinwu District"},"position":{"lat":24.97186,"lon":121.10936},"viewport":{"topLeftPoint":{"lat":24.97276,"lon":121.10837},"btmRightPoint":{"lat":24.97096,"lon":121.11035}},"entryPoints":[{"type":"main","position":{"lat":24.97178,"lon":121.1093}}]},{"type":"POI","id":"158009002154753","score":2.5293753147,"dist":12155.128902623723,"info":"search:ta:158009002154753-TW","poi":{"name":"Domino's Pizza Hukou Zhongzheng Restaurant","phone":"+886 3 590 5000","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"219","streetName":"Zhongzheng Road Section 1","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","extendedPostalCode":"30342","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"219, Zhongzheng Road Section 1, Hukou Township, Hsinchu County 30342","localName":"Hukou Township"},"position":{"lat":24.89952,"lon":121.04748},"viewport":{"topLeftPoint":{"lat":24.90042,"lon":121.04649},"btmRightPoint":{"lat":24.89862,"lon":121.04847}},"entryPoints":[{"type":"main","position":{"lat":24.89949,"lon":121.04738}}]},{"type":"POI","id":"158009002155612","score":2.5136804581,"dist":14255.151925689343,"info":"search:ta:158009002155612-TW","poi":{"name":"Pizza Hut Taoyuan Guanyin Store","phone":"+886 3 498 2118","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"907","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"907, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00985,"lon":121.14104},"viewport":{"topLeftPoint":{"lat":25.01075,"lon":121.14005},"btmRightPoint":{"lat":25.00895,"lon":121.14203}},"entryPoints":[{"type":"main","position":{"lat":25.00987,"lon":121.14097}}]},{"type":"POI","id":"158009002165414","score":2.5127086639,"dist":14377.7749022998,"info":"search:ta:158009002165414-TW","poi":{"name":"Domino's Pizza Guanyin Xinpo Store","phone":"+886 3 498 5822","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"967","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"967, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00911,"lon":121.14232},"viewport":{"topLeftPoint":{"lat":25.01001,"lon":121.14133},"btmRightPoint":{"lat":25.00821,"lon":121.14331}},"entryPoints":[{"type":"main","position":{"lat":25.00902,"lon":121.14225}}]},{"type":"POI","id":"158009001318102","score":2.5112905502,"dist":14555.434957206897,"info":"search:ta:158009001318102-TW","poi":{"name":"拿坡里新豐店","phone":"+886 3 559 0588","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"189-1","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"189-1, 新興路, 新豐鄉, 新竹縣 304","localName":"新豐鄉"},"position":{"lat":24.86917,"lon":120.99528},"viewport":{"topLeftPoint":{"lat":24.87007,"lon":120.99429},"btmRightPoint":{"lat":24.86827,"lon":120.99627}},"entryPoints":[{"type":"main","position":{"lat":24.86907,"lon":120.99537}}]},{"type":"POI","id":"158009002152801","score":2.5110216141,"dist":14588.988689531341,"info":"search:ta:158009002152801-TW","poi":{"name":"Pizza Hut Hsinchu Xinfeng Store","phone":"+886 3 559 9111","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"171, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86889,"lon":120.99459},"viewport":{"topLeftPoint":{"lat":24.86979,"lon":120.9936},"btmRightPoint":{"lat":24.86799,"lon":120.99558}},"entryPoints":[{"type":"main","position":{"lat":24.86864,"lon":120.99483}}]},{"type":"POI","id":"158009001725073","score":2.5108249187,"dist":14613.472220701267,"info":"search:ta:158009001725073-TW","poi":{"name":"比薩家族50元比薩 新竹新豐店","phone":"+886 3 559 9095","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"171, 新興路, 新豐鄉, 新竹縣 30444","localName":"新豐鄉"},"position":{"lat":24.86867,"lon":120.99458},"viewport":{"topLeftPoint":{"lat":24.86957,"lon":120.99359},"btmRightPoint":{"lat":24.86777,"lon":120.99557}},"entryPoints":[{"type":"main","position":{"lat":24.86854,"lon":120.9947}}]},{"type":"POI","id":"158009002166980","score":2.5100557804,"dist":14708.95915754533,"info":"search:ta:158009002166980-TW","poi":{"name":"Domino's Pizza Xinfeng Xinxing Restaurant","phone":"+886 3 557 6611","brands":[{"name":"Domino's Pizza"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"146-15","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"146-15, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86782,"lon":120.99431},"viewport":{"topLeftPoint":{"lat":24.86872,"lon":120.99332},"btmRightPoint":{"lat":24.86692,"lon":120.9953}},"entryPoints":[{"type":"main","position":{"lat":24.86797,"lon":120.99415}}]},{"type":"POI","id":"158009001316049","score":2.4848582745,"dist":17649.691992150107,"info":"search:ta:158009001316049-TW","poi":{"name":"拿坡里楊梅店","phone":"+886 3 475 0200","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"184","streetName":"Dacheng Road","municipalitySubdivision":"Yangmei District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"326","extendedPostalCode":"32643","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"184, Dacheng Road, Yangmei District, Taoyuan City 32643","localName":"Yangmei District"},"position":{"lat":24.91224,"lon":121.14588},"viewport":{"topLeftPoint":{"lat":24.91314,"lon":121.14489},"btmRightPoint":{"lat":24.91134,"lon":121.14687}},"entryPoints":[{"type":"main","position":{"lat":24.91224,"lon":121.14578}}]}]}}],"summary":{"successfulRequests":3,"totalRequests":3}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'x-ms-azuremaps-region',
  'West US 2',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-MSEdge-Ref',
  'Ref A: A44FAACBC9324B22AB56F771549E85B1 Ref B: TYBEDGE0409 Ref C: 2022-02-22T10:21:48Z',
  'Date',
  'Tue, 22 Feb 2022 10:21:48 GMT'
]);