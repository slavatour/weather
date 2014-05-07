var q = require('q');
var MarkersRepositories = require('../repositories/MarkersRepositories');
var MarkersSirvices = require('../services/MarkersServices');

exports.MarkerController = function () {
	var self = {};
	self.getMarkersCollection = function (latitude, longitude, zoom, callbackFunction) {
		var markersRepositories = new MarkersRepositories.MarkersRepositories();
		var markersSirvices = new MarkersSirvices.MarkersServices();
		markersRepositories.getMarkersLatLon(latitude, longitude, zoom, function (data) {
			callbackFunction(markersSirvices.filterGeoname(data));
		});
	}
	return self;
};

