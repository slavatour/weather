$(document).ready(function () {
	App.module("Markers.Views", function (Views, App, Backbone, Marionette, $, _) {
		Views.MarkerModelView = Marionette.ItemView.extend({
			template: "#markerForcast",
			initialize: function () {

			},
			render: function () {
				// var options = {
				// 	latitude: this.model.get('latitude'),
				// 	longitude: this.model.get('longitude'),
				// 	content: _.template(this.template),
				// 	iconUrl: '/',
				// }
				// App.Maps.setMarker(options);
			}
		});
	});
});