$(document).ready(function () {
	App.module("WeatherForcast.Collections", function (Collections, App, Backbone, Marionette, $, _) {
		Collections.WeatherCollection = Backbone.Collection.extend({
			model: App.WeatherForcast.Models.WeatherModel
		});
	});

});