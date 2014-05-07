$(document).ready(function () {
	App.module("WeatherForcast.Views", function (Views, App, Backbone, Marionette, $, _) {
		Views.WeatherCollectionView = Marionette.CompositeView.extend({
			tagName: "div",
			className: "weather-info",
			template: "#forcastView",
			itemView: App.WeatherForcast.Views.WeatherModelView,
			itemViewContainer: "#today",
			
			srender: function () {
				// var template = _.template("#forcastView");
				// $("mainDiv").append(template);
			}
		});
	});
});