exports.MarkersServices = function () {
	var self = {};

	self.filterGeoname = function (data) {
		var cityArray = data.geonames;
		var collection = [];
		for (var i = 0, num = cityArray.length; i < num; i++) {
			var obj = {};
			obj.city = cityArray[i].name;
			obj.latitude = cityArray[i].lat;
			obj.longitude = cityArray[i].lng;
			collection.push(obj);
		};
		// callbackFunction(collection);
		return collection;
	}

	return self;
}