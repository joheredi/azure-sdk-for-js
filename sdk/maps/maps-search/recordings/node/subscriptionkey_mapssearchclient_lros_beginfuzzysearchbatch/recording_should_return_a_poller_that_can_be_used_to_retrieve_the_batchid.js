let nock = require('nock');

module.exports.hash = "3e451624eb3e97c85ab33cdea77e7da9";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/search/fuzzy/batch/json', {"batchItems":[{"query":"?query=pizza&countrySet=fr"}]})
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
  'Ref A: 3AC7515B483648DFA99492F929B6FC2E Ref B: TPE30EDGE0620 Ref C: 2022-03-15T05:29:23Z',
  'Date',
  'Tue, 15 Mar 2022 05:29:23 GMT'
]);

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/fuzzy/batch/<batch-id>')
  .query(true)
  .reply(200, {"batchItems":[{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":48,"numResults":10,"offset":0,"totalResults":19729,"fuzzyLevel":1},"results":[{"type":"POI","id":"250001000238131","score":2.1454398632,"info":"search:ta:250001000238131-FR","poi":{"name":"La Nonna","phone":"+33 4 94 26 60 86","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Corniche de la Coudoulière","municipality":"Six-Fours-Les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte D'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Corniche de la Coudoulière, 83140 Six-Fours-Les-Plages","localName":"Six-Fours-Les-Plages"},"position":{"lat":43.09252,"lon":5.81173},"viewport":{"topLeftPoint":{"lat":43.09342,"lon":5.8105},"btmRightPoint":{"lat":43.09162,"lon":5.81296}},"entryPoints":[{"type":"main","position":{"lat":43.09252,"lon":5.81173}}]},{"type":"POI","id":"250009008021593","score":2.1454398632,"info":"search:ta:250009008021593-FR","poi":{"name":"L'Eldorado Pizzeria","phone":"+33 4 94 07 02 18","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"260","streetName":"Corniche de la Coudoulière","municipality":"Six-Fours-Les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte D'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"260 Corniche de la Coudoulière, 83140 Six-Fours-Les-Plages","localName":"Six-Fours-Les-Plages"},"position":{"lat":43.09783,"lon":5.81209},"viewport":{"topLeftPoint":{"lat":43.09873,"lon":5.81086},"btmRightPoint":{"lat":43.09693,"lon":5.81332}},"entryPoints":[{"type":"main","position":{"lat":43.09783,"lon":5.81217}}]},{"type":"POI","id":"250001000205772","score":2.1454398632,"info":"search:ta:250001000205772-FR","poi":{"name":"Vinon Pizzas","phone":"+33 4 92 78 98 64","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Avenue de la Libération","municipality":"Vinon-sur-Verdon","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83560","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Avenue de la Libération, 83560 Vinon-sur-Verdon","localName":"Vinon-sur-Verdon"},"position":{"lat":43.72576,"lon":5.81207},"viewport":{"topLeftPoint":{"lat":43.72666,"lon":5.81083},"btmRightPoint":{"lat":43.72486,"lon":5.81331}},"entryPoints":[{"type":"main","position":{"lat":43.72555,"lon":5.81271}}]},{"type":"POI","id":"250001000270833","score":2.1454398632,"info":"search:ta:250001000270833-FR","poi":{"name":"Maraninchi Thierry Beach Pizza U St Azzu","phone":"+33 4 94 34 66 21","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Square des Bains","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Square des Bains, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.10981,"lon":5.81348},"viewport":{"topLeftPoint":{"lat":43.11071,"lon":5.81225},"btmRightPoint":{"lat":43.10891,"lon":5.81471}},"entryPoints":[{"type":"main","position":{"lat":43.10981,"lon":5.81348}}]},{"type":"POI","id":"250009007876390","score":2.1454398632,"info":"search:ta:250009007876390-FR","poi":{"name":"Pizza Chez Yo","phone":"+33 4 94 74 90 76","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"921","streetName":"Avenue des Palmiers","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"921 Avenue des Palmiers, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.07703,"lon":5.80489},"viewport":{"topLeftPoint":{"lat":43.07793,"lon":5.80366},"btmRightPoint":{"lat":43.07613,"lon":5.80612}},"entryPoints":[{"type":"main","position":{"lat":43.07708,"lon":5.8049}}]},{"type":"POI","id":"250009008004630","score":2.1454398632,"info":"search:ta:250009008004630-FR","poi":{"name":"CapHorn","phone":"+33 4 94 74 92 51","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Quai Saint-Pierre","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Quai Saint-Pierre, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.0768,"lon":5.80394},"viewport":{"topLeftPoint":{"lat":43.0777,"lon":5.80271},"btmRightPoint":{"lat":43.0759,"lon":5.80517}},"entryPoints":[{"type":"main","position":{"lat":43.07675,"lon":5.80403}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0ZTY4YThkNDIyNzE2ODVlZDk4NjljZmQ=","sourceName":"Foursquare"}]}},{"type":"POI","id":"250009004636805","score":2.1454398632,"info":"search:ta:250009004636805-FR","poi":{"name":"Vidéo Look Pizza","phone":"+33 4 94 25 23 80","categorySet":[{"id":7315036}],"url":"videolookpizza.free.fr/crbst_0.html","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"40","streetName":"Boulevard Chanzy","municipality":"Le Beausset","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83330","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"40 Boulevard Chanzy, 83330 Le Beausset","localName":"Le Beausset"},"position":{"lat":43.19638,"lon":5.80561},"viewport":{"topLeftPoint":{"lat":43.19728,"lon":5.80438},"btmRightPoint":{"lat":43.19548,"lon":5.80684}},"entryPoints":[{"type":"main","position":{"lat":43.1963,"lon":5.80552}}]},{"type":"POI","id":"250009008046847","score":2.1454398632,"info":"search:ta:250009008046847-FR","poi":{"name":"O Délices Pizza","phone":"+33 4 91 02 32 90","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"64","streetName":"Rue Saint-Pierre","municipalitySubdivision":"5ème Arrondissement","municipality":"Marseille","countrySecondarySubdivision":"Bouches-du-Rhône","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"13005","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"64 Rue Saint-Pierre, 13005 Marseille","localName":"Marseille"},"position":{"lat":43.2928,"lon":5.39024},"viewport":{"topLeftPoint":{"lat":43.2937,"lon":5.389},"btmRightPoint":{"lat":43.2919,"lon":5.39148}},"entryPoints":[{"type":"main","position":{"lat":43.29285,"lon":5.39026}}]},{"type":"POI","id":"250009004479653","score":2.1454398632,"info":"search:ta:250009004479653-FR","poi":{"name":"Pizza Chez Bert","phone":"+33 4 94 90 21 11","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"30","streetName":"Rue Portalis","municipality":"Le Beausset","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83330","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"30 Rue Portalis, 83330 Le Beausset","localName":"Le Beausset"},"position":{"lat":43.19816,"lon":5.8024},"viewport":{"topLeftPoint":{"lat":43.19906,"lon":5.80117},"btmRightPoint":{"lat":43.19726,"lon":5.80363}},"entryPoints":[{"type":"main","position":{"lat":43.19814,"lon":5.80238}}]},{"type":"POI","id":"250009007906422","score":2.1454398632,"info":"search:ta:250009007906422-FR","poi":{"name":"Chez Mico","phone":"+33 4 94 74 16 73","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"18","streetName":"Rue Barthélemy de Don","municipality":"Sanary-sur-Mer","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83110","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"18 Rue Barthélemy de Don, 83110 Sanary-sur-Mer","localName":"Sanary-sur-Mer"},"position":{"lat":43.11838,"lon":5.80283},"viewport":{"topLeftPoint":{"lat":43.11928,"lon":5.8016},"btmRightPoint":{"lat":43.11748,"lon":5.80406}},"entryPoints":[{"type":"main","position":{"lat":43.11835,"lon":5.80261}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NWJhNmU4NTQ5OGUzYmZmOTc0ZTViMDk=","sourceName":"Foursquare"}]}}]}}],"summary":{"successfulRequests":1,"totalRequests":1}}, [
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
  'Ref A: 91DD742748B749908DCEEEE075E2672F Ref B: TPE30EDGE0620 Ref C: 2022-03-15T05:29:23Z',
  'Date',
  'Tue, 15 Mar 2022 05:29:23 GMT'
]);