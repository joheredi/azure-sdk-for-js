let nock = require('nock');

module.exports.hash = "1490c466d5952f71c9cad6f46f7eb9d9";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .get('/search/nearby/json')
  .query(true)
  .reply(200, {"summary":{"queryType":"NEARBY","queryTime":45,"numResults":10,"offset":0,"totalResults":70433,"fuzzyLevel":1,"geoBias":{"lat":47.606038,"lon":-122.333345}},"results":[{"type":"POI","id":"840539001316525","score":99.9932861328,"dist":6.716018628498251,"info":"search:ta:840539001316525-US","poi":{"name":"Madison St & 4th Ave","categorySet":[{"id":9942002}],"categories":["bus stop","public transport stop"],"classifications":[{"code":"PUBLIC_TRANSPORT_STOP","names":[{"nameLocale":"en-US","name":"bus stop"},{"nameLocale":"en-US","name":"public transport stop"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60598,"lon":-122.33337},"viewport":{"topLeftPoint":{"lat":47.60688,"lon":-122.3347},"btmRightPoint":{"lat":47.60508,"lon":-122.33204}},"entryPoints":[{"type":"main","position":{"lat":47.60592,"lon":-122.33334}}]},{"type":"POI","id":"840539003078694","score":99.9807510376,"dist":19.251660747999768,"info":"search:ta:840539003078694-US","poi":{"name":"Re/Max Of America","phone":"+1 206-780-6000","brands":[{"name":"Re/Max of America"}],"categorySet":[{"id":9361015}],"url":"www.remax.com","categories":["real estate agents","shop"],"classifications":[{"code":"SHOP","names":[{"nameLocale":"en-US","name":"shop"},{"nameLocale":"en-US","name":"real estate agents"}]}]},"address":{"streetNumber":"290","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"290 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60588,"lon":-122.33345},"viewport":{"topLeftPoint":{"lat":47.60678,"lon":-122.33478},"btmRightPoint":{"lat":47.60498,"lon":-122.33212}},"entryPoints":[{"type":"main","position":{"lat":47.60588,"lon":-122.33345}}]},{"type":"POI","id":"840537000014398","score":99.9702606201,"dist":29.73928863199145,"info":"search:ta:840537000014398-US","poi":{"name":"Narrows Labs","phone":"+1 800-321-3579","categorySet":[{"id":9352}],"categories":["company"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1004","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1004 4th Avenue, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60617,"lon":-122.333},"viewport":{"topLeftPoint":{"lat":47.60707,"lon":-122.33433},"btmRightPoint":{"lat":47.60527,"lon":-122.33167}},"entryPoints":[{"type":"main","position":{"lat":47.60617,"lon":-122.333}}]},{"type":"POI","id":"840539001096914","score":99.9702606201,"dist":29.73928863199145,"info":"search:ta:840539001096914-US","poi":{"name":"Darryl S Vhugen","phone":"+1 206-389-1673","categorySet":[{"id":9352023}],"categories":["company","legal services"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"legal services"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1001","streetName":"4Th Ave","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98185","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4Th Ave, Seattle, WA 98185","localName":"Seattle"},"position":{"lat":47.60617,"lon":-122.333},"viewport":{"topLeftPoint":{"lat":47.60707,"lon":-122.33433},"btmRightPoint":{"lat":47.60527,"lon":-122.33167}},"entryPoints":[{"type":"main","position":{"lat":47.60617,"lon":-122.333}}]},{"type":"POI","id":"840539003144366","score":99.967918396,"dist":32.078985643003946,"info":"search:ta:840539003144366-US","poi":{"name":"Espn Seattle","categorySet":[{"id":9158}],"categories":["media facility"],"classifications":[{"code":"MEDIA_FACILITY","names":[{"nameLocale":"en-US","name":"media facility"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60575,"lon":-122.33332},"viewport":{"topLeftPoint":{"lat":47.60665,"lon":-122.33465},"btmRightPoint":{"lat":47.60485,"lon":-122.33199}},"entryPoints":[{"type":"main","position":{"lat":47.60591,"lon":-122.33338}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0YzkyNTJiNmFlNDUyMjRiMjU0OWVmOTc=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539000411206","score":99.9641952515,"dist":35.80670082469081,"info":"search:ta:840539000411206-US","poi":{"name":"1001 Fourth Avenue Place","categorySet":[{"id":9382}],"categories":["commercial building"],"classifications":[{"code":"COMMERCIAL_BUILDING","names":[{"nameLocale":"en-US","name":"commercial building"}]}]},"address":{"streetNumber":"1001","streetName":"4Th Ave","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 4Th Ave, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60636,"lon":-122.33334},"viewport":{"topLeftPoint":{"lat":47.60726,"lon":-122.33467},"btmRightPoint":{"lat":47.60546,"lon":-122.33201}},"entryPoints":[{"type":"main","position":{"lat":47.60644,"lon":-122.33325}}]},{"type":"POI","id":"840539000717400","score":99.9596939087,"dist":40.30957040295779,"info":"search:ta:840539000717400-US","poi":{"name":"Safeco Plaza Parking","phone":"+1 206-613-4214","categorySet":[{"id":7313}],"categories":["parking garage"],"classifications":[{"code":"PARKING_GARAGE","names":[{"nameLocale":"en-US","name":"parking garage"}]}]},"address":{"streetNumber":"342","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"342 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60622,"lon":-122.33381},"viewport":{"topLeftPoint":{"lat":47.60712,"lon":-122.33514},"btmRightPoint":{"lat":47.60532,"lon":-122.33248}},"entryPoints":[{"type":"main","position":{"lat":47.60603,"lon":-122.33308}}]},{"type":"POI","id":"840539001256790","score":99.9574890137,"dist":42.50751574385384,"info":"search:ta:840539001256790-US","poi":{"name":"4th Ave & Madison St","categorySet":[{"id":9942002}],"categories":["bus stop","public transport stop"],"classifications":[{"code":"PUBLIC_TRANSPORT_STOP","names":[{"nameLocale":"en-US","name":"bus stop"},{"nameLocale":"en-US","name":"public transport stop"}]}]},"address":{"streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60607,"lon":-122.33278},"viewport":{"topLeftPoint":{"lat":47.60697,"lon":-122.33411},"btmRightPoint":{"lat":47.60517,"lon":-122.33145}},"entryPoints":[{"type":"main","position":{"lat":47.60615,"lon":-122.33281}}]},{"type":"POI","id":"840537000017097","score":99.9572525024,"dist":42.743782441314686,"info":"search:ta:840537000017097-US","poi":{"name":"Sipherd Burke Law","phone":"+1 206-400-7722","categorySet":[{"id":9352023}],"url":"www.sipherdburkelaw.com","categories":["company","legal services"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"legal services"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1001","streetName":"Madison Street","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98104","extendedPostalCode":"98104-3638","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1001 Madison Street, Seattle, WA 98104","localName":"Seattle"},"position":{"lat":47.60595,"lon":-122.3339},"viewport":{"topLeftPoint":{"lat":47.60685,"lon":-122.33523},"btmRightPoint":{"lat":47.60505,"lon":-122.33257}},"entryPoints":[{"type":"main","position":{"lat":47.60573,"lon":-122.33381}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NGVhMzZmZDQ5OGUyYzA5MGExNThkYjA=","sourceName":"Foursquare"}]}},{"type":"POI","id":"840539002303490","score":99.9566574097,"dist":43.34260981768476,"info":"search:ta:840539002303490-US","poi":{"name":"Dolphin Technical Communication","phone":"+1 206-458-7327","categorySet":[{"id":9352002}],"categories":["company","service"],"classifications":[{"code":"COMPANY","names":[{"nameLocale":"en-US","name":"service"},{"nameLocale":"en-US","name":"company"}]}]},"address":{"streetNumber":"1021","streetName":"4th Avenue","municipalitySubdivision":"Central Business District","municipality":"Seattle","countrySecondarySubdivision":"King","countrySubdivision":"WA","countrySubdivisionName":"Washington","postalCode":"98154","countryCode":"US","country":"United States","countryCodeISO3":"USA","freeformAddress":"1021 4th Avenue, Seattle, WA 98154","localName":"Seattle"},"position":{"lat":47.60642,"lon":-122.33323},"viewport":{"topLeftPoint":{"lat":47.60732,"lon":-122.33456},"btmRightPoint":{"lat":47.60552,"lon":-122.3319}},"entryPoints":[{"type":"main","position":{"lat":47.60642,"lon":-122.33323}}]}]}, [
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
  'Ref A: BD5FF60982C340F88D4BAF4514626F83 Ref B: TPE30EDGE0416 Ref C: 2022-03-15T05:29:18Z',
  'Date',
  'Tue, 15 Mar 2022 05:29:18 GMT'
]);