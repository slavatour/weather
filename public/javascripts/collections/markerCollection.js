$(document).ready(function () {
	App.module("Markers.Collections", function (Collections, App, Backbone, Marionette, $, _) {
		Collections.MarkerCollection = Backbone.Collection.extend({
			url: "/markers",
			model: App.Markers.Models.MarkerModel
		});
	});
});