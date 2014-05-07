$(document).ready(function () {
	
	App.module("Markers.Models", function (Models, App, Backbone, Marionette, $, _) {
		Models.MarkerModel = Backbone.Model.extend({
			defaults: {
				latitude: 0,
				longitude: 0,
				city: "noCity",
				weatherCollection: [
					30
				]
			},
			initialize: function () {
				
			}
		});
	});

});