$(document).ready(function () {
	App.module("WeatherForcast.Views", function (Views, App, Backbone, Marionette, $, _) {
		Views.WeatherModelView = Marionette.ItemView.extend({
			tagName: "section",
			className: "forcastBox col-lg-2",
			template: "#forcastBoxTemplate",
			onRender: function () {
				// console.log('1');
			}
		});
	});
});