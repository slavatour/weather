var http = require('http');
var url = require('url');
var fs = require('fs');

exports.MarkersRepositories = function () {
	var self = {};

	self.getMarkersLatLon = function (latitude, langitude, zoom, callbackFunction) {
		var urlGeonames = "http://api.geonames.org/citiesJSON?&lang=ru&username=slavatour";
		//&maxRows=20&north=44.1&south=-9.9&east=-22.4&west=55.2";
		

//service.............
		fs.readFile('./locals/zoomOptions.json', 'utf8', function (err, data) {
			if(err) {
				return err;
			}
			var coordinateOpt = JSON.parse(data);
			var north = 1*latitude + 1*coordinateOpt[zoom].lat;
			var south = latitude - coordinateOpt[zoom].lat;
			var east = 1*langitude + 1*coordinateOpt[zoom].lng;
			var west = langitude - coordinateOpt[zoom].lng;
			var maxRows = coordinateOpt[zoom].qnt;
			urlGeonames = urlGeonames + '&maxRows='+ maxRows + '&north='+
			north+'&south='+south+'&east='+east+'&west='+west;

			var urlComponents = url.parse(urlGeonames);
			var options = {
				host: urlComponents.host,
				path: urlComponents.path,
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			};
//service.............



			var req = http.request(options, function (res) {
				var result = "";
				res.setEncoding('utf8');
				
				res.on('data', function (chunk) {
					result += chunk;
				});
				res.on('end', function () {
					var obj = JSON.parse(result);
					callbackFunction(obj);
				});
			});
			req.on('error', function(e) {
			  console.log('problem with request: ' + e.message);
			});
			req.end();

		});
		

		
	}

	return self;
}