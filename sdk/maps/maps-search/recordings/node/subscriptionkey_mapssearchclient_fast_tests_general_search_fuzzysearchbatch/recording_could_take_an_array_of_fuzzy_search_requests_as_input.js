let nock = require('nock');

module.exports.hash = "b0c66d6217e7b090b34680da0b3dcf15";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://atlas.microsoft.com:443', {"encodedQueryParams":true})
  .post('/search/fuzzy/batch/sync/json', {"batchItems":[{"query":"?query=pizza&countrySet=fr"},{"query":"?query=pizza&lat=25&lon=121"},{"query":"?query=pizza&lat=25&lon=121&countrySet=tw"}]})
  .query(true)
  .reply(200, {"batchItems":[{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":48,"numResults":10,"offset":0,"totalResults":19729,"fuzzyLevel":1},"results":[{"type":"POI","id":"250001000238131","score":2.1454398632,"info":"search:ta:250001000238131-FR","poi":{"name":"La Nonna","phone":"+33 4 94 26 60 86","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Corniche de la Coudoulière","municipality":"Six-Fours-Les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte D'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Corniche de la Coudoulière, 83140 Six-Fours-Les-Plages","localName":"Six-Fours-Les-Plages"},"position":{"lat":43.09252,"lon":5.81173},"viewport":{"topLeftPoint":{"lat":43.09342,"lon":5.8105},"btmRightPoint":{"lat":43.09162,"lon":5.81296}},"entryPoints":[{"type":"main","position":{"lat":43.09252,"lon":5.81173}}]},{"type":"POI","id":"250009008021593","score":2.1454398632,"info":"search:ta:250009008021593-FR","poi":{"name":"L'Eldorado Pizzeria","phone":"+33 4 94 07 02 18","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"260","streetName":"Corniche de la Coudoulière","municipality":"Six-Fours-Les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte D'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"260 Corniche de la Coudoulière, 83140 Six-Fours-Les-Plages","localName":"Six-Fours-Les-Plages"},"position":{"lat":43.09783,"lon":5.81209},"viewport":{"topLeftPoint":{"lat":43.09873,"lon":5.81086},"btmRightPoint":{"lat":43.09693,"lon":5.81332}},"entryPoints":[{"type":"main","position":{"lat":43.09783,"lon":5.81217}}]},{"type":"POI","id":"250001000205772","score":2.1454398632,"info":"search:ta:250001000205772-FR","poi":{"name":"Vinon Pizzas","phone":"+33 4 92 78 98 64","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Avenue de la Libération","municipality":"Vinon-sur-Verdon","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83560","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Avenue de la Libération, 83560 Vinon-sur-Verdon","localName":"Vinon-sur-Verdon"},"position":{"lat":43.72576,"lon":5.81207},"viewport":{"topLeftPoint":{"lat":43.72666,"lon":5.81083},"btmRightPoint":{"lat":43.72486,"lon":5.81331}},"entryPoints":[{"type":"main","position":{"lat":43.72555,"lon":5.81271}}]},{"type":"POI","id":"250001000270833","score":2.1454398632,"info":"search:ta:250001000270833-FR","poi":{"name":"Maraninchi Thierry Beach Pizza U St Azzu","phone":"+33 4 94 34 66 21","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Square des Bains","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Square des Bains, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.10981,"lon":5.81348},"viewport":{"topLeftPoint":{"lat":43.11071,"lon":5.81225},"btmRightPoint":{"lat":43.10891,"lon":5.81471}},"entryPoints":[{"type":"main","position":{"lat":43.10981,"lon":5.81348}}]},{"type":"POI","id":"250009007876390","score":2.1454398632,"info":"search:ta:250009007876390-FR","poi":{"name":"Pizza Chez Yo","phone":"+33 4 94 74 90 76","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"921","streetName":"Avenue des Palmiers","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"921 Avenue des Palmiers, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.07703,"lon":5.80489},"viewport":{"topLeftPoint":{"lat":43.07793,"lon":5.80366},"btmRightPoint":{"lat":43.07613,"lon":5.80612}},"entryPoints":[{"type":"main","position":{"lat":43.07708,"lon":5.8049}}]},{"type":"POI","id":"250009008004630","score":2.1454398632,"info":"search:ta:250009008004630-FR","poi":{"name":"CapHorn","phone":"+33 4 94 74 92 51","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetName":"Quai Saint-Pierre","municipality":"Six-Fours-les-Plages","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83140","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"Quai Saint-Pierre, 83140 Six-Fours-les-Plages","localName":"Six-Fours-les-Plages"},"position":{"lat":43.0768,"lon":5.80394},"viewport":{"topLeftPoint":{"lat":43.0777,"lon":5.80271},"btmRightPoint":{"lat":43.0759,"lon":5.80517}},"entryPoints":[{"type":"main","position":{"lat":43.07675,"lon":5.80403}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo0ZTY4YThkNDIyNzE2ODVlZDk4NjljZmQ=","sourceName":"Foursquare"}]}},{"type":"POI","id":"250009004636805","score":2.1454398632,"info":"search:ta:250009004636805-FR","poi":{"name":"Vidéo Look Pizza","phone":"+33 4 94 25 23 80","categorySet":[{"id":7315036}],"url":"videolookpizza.free.fr/crbst_0.html","categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"40","streetName":"Boulevard Chanzy","municipality":"Le Beausset","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83330","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"40 Boulevard Chanzy, 83330 Le Beausset","localName":"Le Beausset"},"position":{"lat":43.19638,"lon":5.80561},"viewport":{"topLeftPoint":{"lat":43.19728,"lon":5.80438},"btmRightPoint":{"lat":43.19548,"lon":5.80684}},"entryPoints":[{"type":"main","position":{"lat":43.1963,"lon":5.80552}}]},{"type":"POI","id":"250009008046847","score":2.1454398632,"info":"search:ta:250009008046847-FR","poi":{"name":"O Délices Pizza","phone":"+33 4 91 02 32 90","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"64","streetName":"Rue Saint-Pierre","municipalitySubdivision":"5ème Arrondissement","municipality":"Marseille","countrySecondarySubdivision":"Bouches-du-Rhône","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"13005","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"64 Rue Saint-Pierre, 13005 Marseille","localName":"Marseille"},"position":{"lat":43.2928,"lon":5.39024},"viewport":{"topLeftPoint":{"lat":43.2937,"lon":5.389},"btmRightPoint":{"lat":43.2919,"lon":5.39148}},"entryPoints":[{"type":"main","position":{"lat":43.29285,"lon":5.39026}}]},{"type":"POI","id":"250009004479653","score":2.1454398632,"info":"search:ta:250009004479653-FR","poi":{"name":"Pizza Chez Bert","phone":"+33 4 94 90 21 11","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"30","streetName":"Rue Portalis","municipality":"Le Beausset","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83330","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"30 Rue Portalis, 83330 Le Beausset","localName":"Le Beausset"},"position":{"lat":43.19816,"lon":5.8024},"viewport":{"topLeftPoint":{"lat":43.19906,"lon":5.80117},"btmRightPoint":{"lat":43.19726,"lon":5.80363}},"entryPoints":[{"type":"main","position":{"lat":43.19814,"lon":5.80238}}]},{"type":"POI","id":"250009007906422","score":2.1454398632,"info":"search:ta:250009007906422-FR","poi":{"name":"Chez Mico","phone":"+33 4 94 74 16 73","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"18","streetName":"Rue Barthélemy de Don","municipality":"Sanary-sur-Mer","countrySecondarySubdivision":"Var","countrySubdivision":"Provence-Alpes-Côte d'Azur","postalCode":"83110","countryCode":"FR","country":"France","countryCodeISO3":"FRA","freeformAddress":"18 Rue Barthélemy de Don, 83110 Sanary-sur-Mer","localName":"Sanary-sur-Mer"},"position":{"lat":43.11838,"lon":5.80283},"viewport":{"topLeftPoint":{"lat":43.11928,"lon":5.8016},"btmRightPoint":{"lat":43.11748,"lon":5.80406}},"entryPoints":[{"type":"main","position":{"lat":43.11835,"lon":5.80261}}],"dataSources":{"poiDetails":[{"id":"Rm91cnNxdWFyZTo1NWJhNmU4NTQ5OGUzYmZmOTc0ZTViMDk=","sourceName":"Foursquare"}]}}]}},{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":107,"numResults":10,"offset":0,"totalResults":377517,"fuzzyLevel":1,"geoBias":{"lat":25,"lon":121}},"results":[{"type":"POI","id":"158009002150213","score":2.5349180698,"dist":11344.607999926191,"info":"search:ta:158009002150213-TW","poi":{"name":"Pizza Hut Hsinchu Hukou Store","phone":"+886 3 590 6000","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"79","streetName":"Chenggong Road","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"79, Chenggong Road, Hukou Township, Hsinchu County 303","localName":"Hukou Township"},"position":{"lat":24.90616,"lon":121.04416},"viewport":{"topLeftPoint":{"lat":24.90706,"lon":121.04317},"btmRightPoint":{"lat":24.90526,"lon":121.04515}},"entryPoints":[{"type":"main","position":{"lat":24.90617,"lon":121.04415}}]},{"type":"POI","id":"158009002168123","score":2.5341627598,"dist":11457.765315943818,"info":"search:ta:158009002168123-TW","poi":{"name":"Pizza Hut Taoyuan Xinwu Store","phone":"+886 3 497 0856","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"166","streetName":"Zhongshan Road","municipalitySubdivision":"Xinwu District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"327","extendedPostalCode":"32748","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"166, Zhongshan Road, Xinwu District, Taoyuan City 32748","localName":"Xinwu District"},"position":{"lat":24.97186,"lon":121.10936},"viewport":{"topLeftPoint":{"lat":24.97276,"lon":121.10837},"btmRightPoint":{"lat":24.97096,"lon":121.11035}},"entryPoints":[{"type":"main","position":{"lat":24.97178,"lon":121.1093}}]},{"type":"POI","id":"158009002154753","score":2.5293753147,"dist":12155.128902623723,"info":"search:ta:158009002154753-TW","poi":{"name":"Domino's Pizza Hukou Zhongzheng Restaurant","phone":"+886 3 590 5000","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"219","streetName":"Zhongzheng Road Section 1","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","extendedPostalCode":"30342","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"219, Zhongzheng Road Section 1, Hukou Township, Hsinchu County 30342","localName":"Hukou Township"},"position":{"lat":24.89952,"lon":121.04748},"viewport":{"topLeftPoint":{"lat":24.90042,"lon":121.04649},"btmRightPoint":{"lat":24.89862,"lon":121.04847}},"entryPoints":[{"type":"main","position":{"lat":24.89949,"lon":121.04738}}]},{"type":"POI","id":"158009002155612","score":2.5136804581,"dist":14255.151925689343,"info":"search:ta:158009002155612-TW","poi":{"name":"Pizza Hut Taoyuan Guanyin Store","phone":"+886 3 498 2118","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"907","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"907, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00985,"lon":121.14104},"viewport":{"topLeftPoint":{"lat":25.01075,"lon":121.14005},"btmRightPoint":{"lat":25.00895,"lon":121.14203}},"entryPoints":[{"type":"main","position":{"lat":25.00987,"lon":121.14097}}]},{"type":"POI","id":"158009002165414","score":2.5127086639,"dist":14377.7749022998,"info":"search:ta:158009002165414-TW","poi":{"name":"Domino's Pizza Guanyin Xinpo Store","phone":"+886 3 498 5822","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"967","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"967, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00911,"lon":121.14232},"viewport":{"topLeftPoint":{"lat":25.01001,"lon":121.14133},"btmRightPoint":{"lat":25.00821,"lon":121.14331}},"entryPoints":[{"type":"main","position":{"lat":25.00902,"lon":121.14225}}]},{"type":"POI","id":"158009001318102","score":2.5112905502,"dist":14555.434957206897,"info":"search:ta:158009001318102-TW","poi":{"name":"拿坡里新豐店","phone":"+886 3 559 0588","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"189-1","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"189-1, 新興路, 新豐鄉, 新竹縣 304","localName":"新豐鄉"},"position":{"lat":24.86917,"lon":120.99528},"viewport":{"topLeftPoint":{"lat":24.87007,"lon":120.99429},"btmRightPoint":{"lat":24.86827,"lon":120.99627}},"entryPoints":[{"type":"main","position":{"lat":24.86907,"lon":120.99537}}]},{"type":"POI","id":"158009002152801","score":2.5110216141,"dist":14588.988689531341,"info":"search:ta:158009002152801-TW","poi":{"name":"Pizza Hut Hsinchu Xinfeng Store","phone":"+886 3 559 9111","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"171, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86889,"lon":120.99459},"viewport":{"topLeftPoint":{"lat":24.86979,"lon":120.9936},"btmRightPoint":{"lat":24.86799,"lon":120.99558}},"entryPoints":[{"type":"main","position":{"lat":24.86864,"lon":120.99483}}]},{"type":"POI","id":"158009001725073","score":2.5108249187,"dist":14613.472220701267,"info":"search:ta:158009001725073-TW","poi":{"name":"比薩家族50元比薩 新竹新豐店","phone":"+886 3 559 9095","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"171","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"171, 新興路, 新豐鄉, 新竹縣 30444","localName":"新豐鄉"},"position":{"lat":24.86867,"lon":120.99458},"viewport":{"topLeftPoint":{"lat":24.86957,"lon":120.99359},"btmRightPoint":{"lat":24.86777,"lon":120.99557}},"entryPoints":[{"type":"main","position":{"lat":24.86854,"lon":120.9947}}]},{"type":"POI","id":"158009002166980","score":2.5100557804,"dist":14708.95915754533,"info":"search:ta:158009002166980-TW","poi":{"name":"Domino's Pizza Xinfeng Xinxing Restaurant","phone":"+886 3 557 6611","brands":[{"name":"Domino's Pizza"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"146-15","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"146-15, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86782,"lon":120.99431},"viewport":{"topLeftPoint":{"lat":24.86872,"lon":120.99332},"btmRightPoint":{"lat":24.86692,"lon":120.9953}},"entryPoints":[{"type":"main","position":{"lat":24.86797,"lon":120.99415}}]},{"type":"POI","id":"158009001316049","score":2.4848582745,"dist":17649.691992150107,"info":"search:ta:158009001316049-TW","poi":{"name":"拿坡里楊梅店","phone":"+886 3 475 0200","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"pizza"},{"nameLocale":"en-US","name":"restaurant"}]}]},"address":{"streetNumber":"184","streetName":"Dacheng Road","municipalitySubdivision":"Yangmei District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"326","extendedPostalCode":"32643","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"184, Dacheng Road, Yangmei District, Taoyuan City 32643","localName":"Yangmei District"},"position":{"lat":24.91224,"lon":121.14588},"viewport":{"topLeftPoint":{"lat":24.91314,"lon":121.14489},"btmRightPoint":{"lat":24.91134,"lon":121.14687}},"entryPoints":[{"type":"main","position":{"lat":24.91224,"lon":121.14578}}]}]}},{"statusCode":200,"response":{"summary":{"query":"pizza","queryType":"NON_NEAR","queryTime":45,"numResults":10,"offset":0,"totalResults":993,"fuzzyLevel":1,"geoBias":{"lat":25,"lon":121}},"results":[{"type":"POI","id":"158009002150213","score":2.5349180698,"dist":11344.607999926191,"info":"search:ta:158009002150213-TW","poi":{"name":"Pizza Hut Hsinchu Hukou Store","phone":"+886 3 590 6000","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"79","streetName":"Chenggong Road","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"79, Chenggong Road, Hukou Township, Hsinchu County 303","localName":"Hukou Township"},"position":{"lat":24.90616,"lon":121.04416},"viewport":{"topLeftPoint":{"lat":24.90706,"lon":121.04317},"btmRightPoint":{"lat":24.90526,"lon":121.04515}},"entryPoints":[{"type":"main","position":{"lat":24.90617,"lon":121.04415}}]},{"type":"POI","id":"158009002168123","score":2.5341627598,"dist":11457.765315943818,"info":"search:ta:158009002168123-TW","poi":{"name":"Pizza Hut Taoyuan Xinwu Store","phone":"+886 3 497 0856","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"166","streetName":"Zhongshan Road","municipalitySubdivision":"Xinwu District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"327","extendedPostalCode":"32748","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"166, Zhongshan Road, Xinwu District, Taoyuan City 32748","localName":"Xinwu District"},"position":{"lat":24.97186,"lon":121.10936},"viewport":{"topLeftPoint":{"lat":24.97276,"lon":121.10837},"btmRightPoint":{"lat":24.97096,"lon":121.11035}},"entryPoints":[{"type":"main","position":{"lat":24.97178,"lon":121.1093}}]},{"type":"POI","id":"158009002154753","score":2.5293753147,"dist":12155.128902623723,"info":"search:ta:158009002154753-TW","poi":{"name":"Domino's Pizza Hukou Zhongzheng Restaurant","phone":"+886 3 590 5000","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"219","streetName":"Zhongzheng Road Section 1","municipalitySubdivision":"Hukou Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"303","extendedPostalCode":"30342","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"219, Zhongzheng Road Section 1, Hukou Township, Hsinchu County 30342","localName":"Hukou Township"},"position":{"lat":24.89952,"lon":121.04748},"viewport":{"topLeftPoint":{"lat":24.90042,"lon":121.04649},"btmRightPoint":{"lat":24.89862,"lon":121.04847}},"entryPoints":[{"type":"main","position":{"lat":24.89949,"lon":121.04738}}]},{"type":"POI","id":"158009002155612","score":2.5136804581,"dist":14255.151925689343,"info":"search:ta:158009002155612-TW","poi":{"name":"Pizza Hut Taoyuan Guanyin Store","phone":"+886 3 498 2118","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"907","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"907, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00985,"lon":121.14104},"viewport":{"topLeftPoint":{"lat":25.01075,"lon":121.14005},"btmRightPoint":{"lat":25.00895,"lon":121.14203}},"entryPoints":[{"type":"main","position":{"lat":25.00987,"lon":121.14097}}]},{"type":"POI","id":"158009002165414","score":2.5127086639,"dist":14377.7749022998,"info":"search:ta:158009002165414-TW","poi":{"name":"Domino's Pizza Guanyin Xinpo Store","phone":"+886 3 498 5822","brands":[{"name":"Domino's"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"967","streetName":"Zhongshan Road Section 2","municipalitySubdivision":"Guanyin District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"328","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"967, Zhongshan Road Section 2, Guanyin District, Taoyuan City 328","localName":"Guanyin District"},"position":{"lat":25.00911,"lon":121.14232},"viewport":{"topLeftPoint":{"lat":25.01001,"lon":121.14133},"btmRightPoint":{"lat":25.00821,"lon":121.14331}},"entryPoints":[{"type":"main","position":{"lat":25.00902,"lon":121.14225}}]},{"type":"POI","id":"158009001318102","score":2.5112905502,"dist":14555.434957206897,"info":"search:ta:158009001318102-TW","poi":{"name":"拿坡里新豐店","phone":"+886 3 559 0588","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"189-1","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"189-1, 新興路, 新豐鄉, 新竹縣 304","localName":"新豐鄉"},"position":{"lat":24.86917,"lon":120.99528},"viewport":{"topLeftPoint":{"lat":24.87007,"lon":120.99429},"btmRightPoint":{"lat":24.86827,"lon":120.99627}},"entryPoints":[{"type":"main","position":{"lat":24.86907,"lon":120.99537}}]},{"type":"POI","id":"158009002152801","score":2.5110216141,"dist":14588.988689531341,"info":"search:ta:158009002152801-TW","poi":{"name":"Pizza Hut Hsinchu Xinfeng Store","phone":"+886 3 559 9111","brands":[{"name":"Pizza Hut"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"171","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"171, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86889,"lon":120.99459},"viewport":{"topLeftPoint":{"lat":24.86979,"lon":120.9936},"btmRightPoint":{"lat":24.86799,"lon":120.99558}},"entryPoints":[{"type":"main","position":{"lat":24.86864,"lon":120.99483}}]},{"type":"POI","id":"158009001725073","score":2.5108249187,"dist":14613.472220701267,"info":"search:ta:158009001725073-TW","poi":{"name":"比薩家族50元比薩 新竹新豐店","phone":"+886 3 559 9095","categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"171","streetName":"新興路","municipalitySubdivision":"新豐鄉","municipality":"新竹縣","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"台灣","countryCodeISO3":"TWN","freeformAddress":"171, 新興路, 新豐鄉, 新竹縣 30444","localName":"新豐鄉"},"position":{"lat":24.86867,"lon":120.99458},"viewport":{"topLeftPoint":{"lat":24.86957,"lon":120.99359},"btmRightPoint":{"lat":24.86777,"lon":120.99557}},"entryPoints":[{"type":"main","position":{"lat":24.86854,"lon":120.9947}}]},{"type":"POI","id":"158009002166980","score":2.5100557804,"dist":14708.95915754533,"info":"search:ta:158009002166980-TW","poi":{"name":"Domino's Pizza Xinfeng Xinxing Restaurant","phone":"+886 3 557 6611","brands":[{"name":"Domino's Pizza"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"146-15","streetName":"Xinxing Road","municipalitySubdivision":"Xinfeng Township","municipality":"Hsinchu County","countrySubdivision":"台灣","postalCode":"304","extendedPostalCode":"30444","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"146-15, Xinxing Road, Xinfeng Township, Hsinchu County 30444","localName":"Xinfeng Township"},"position":{"lat":24.86782,"lon":120.99431},"viewport":{"topLeftPoint":{"lat":24.86872,"lon":120.99332},"btmRightPoint":{"lat":24.86692,"lon":120.9953}},"entryPoints":[{"type":"main","position":{"lat":24.86797,"lon":120.99415}}]},{"type":"POI","id":"158009001316049","score":2.4848582745,"dist":17649.691992150107,"info":"search:ta:158009001316049-TW","poi":{"name":"拿坡里楊梅店","phone":"+886 3 475 0200","brands":[{"name":"Napoli"}],"categorySet":[{"id":7315036}],"categories":["pizza","restaurant"],"classifications":[{"code":"RESTAURANT","names":[{"nameLocale":"en-US","name":"restaurant"},{"nameLocale":"en-US","name":"pizza"}]}]},"address":{"streetNumber":"184","streetName":"Dacheng Road","municipalitySubdivision":"Yangmei District","municipality":"Taoyuan City","countrySubdivision":"Taoyuan City","postalCode":"326","extendedPostalCode":"32643","countryCode":"TW","country":"Taiwan","countryCodeISO3":"TWN","freeformAddress":"184, Dacheng Road, Yangmei District, Taoyuan City 32643","localName":"Yangmei District"},"position":{"lat":24.91224,"lon":121.14588},"viewport":{"topLeftPoint":{"lat":24.91314,"lon":121.14489},"btmRightPoint":{"lat":24.91134,"lon":121.14687}},"entryPoints":[{"type":"main","position":{"lat":24.91224,"lon":121.14578}}]}]}}],"summary":{"successfulRequests":3,"totalRequests":3}}, [
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
  'Ref A: 76D3F418376646EB8BD745034980B48D Ref B: TPE30EDGE0620 Ref C: 2022-03-15T05:29:21Z',
  'Date',
  'Tue, 15 Mar 2022 05:29:21 GMT'
]);