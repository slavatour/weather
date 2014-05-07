$(document).ready(function () {
	App.module("Markers.Views", function (Views, App, Backbone, Marionette, $, _) {
		Views.MarkerCollectionView = Marionette.CompositeView.extend({
			url: "markers",
			tagName: "div",
			className: "markerContainer",
			template: _.template($("#markerForcast").html()),
			itemView: App.Markers.Views.MarkerModelView,
			// itemViewContainer: 
			render: function () {
				var collection = this.collection.toJSON();
				_.each(collection, function (model) {
					var loadTemplate = this.$el.html(this.template(model));
					var LatLng = new google.maps.LatLng(model.latitude, model.longitude);
					var marker = new MarkerWithLabel ({
						position: LatLng,
						icon: '/images/weather_icons3.png',
						map: App.Maps.map,
						labelContent:  this.el,
						labelAnchor: new google.maps.Point(30, 20),
						labelClass: "labels"
					});
					// App.Maps.setMarker(marker);

				}, this);
			}
		});
	});
});