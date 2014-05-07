$(document).ready(function () {
	App.module("WeatherForcast.Models", function (Models, App, Backbone, Marionette, $, _) {
		Models.WeatherModel = Backbone.Model.extend({
			defaults: {
				date: '01.01.1990',
				dayTime: 'day',
				temp_min: 0,
				temp_max: 10,
				humidity: 60,
				wind_speed: 10,
				wind_point: 'wsw',
				description: 'no description',
				weather_code: 0
			},
			url: function (latitude, longitude) {
				var url = "/forcast/"+latitude+"/"+longitude;
				return url;
			}
		});
	});
	

});