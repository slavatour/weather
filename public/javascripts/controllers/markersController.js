$(document).ready(function () {
	var map = App.Maps.map;

	var markerModel = new App.Markers.Models.MarkerModel();
	
	var markerCollection = new App.Markers.Collections.MarkerCollection({
		model: markerModel
	});

	var markerModelView = new App.Markers.Views.MarkerModelView({
		model: markerModel
	});
	// var markerCollectionView = new App.Markers.Views.MarkerCollectionView({
	// 	collection: markerCollection
	// });
	

	//init load
	google.maps.event.addDomListener(window, 'load', function () {
		var center = map.getCenter();
		var zoom = map.getZoom();
		markerCollection.url = markerCollection.url+'/'+center.k+'/'+center.A+'/'+zoom;
		markerCollection.fetch({
			success: function (collection) {
				var markerCollectionView = new App.Markers.Views.MarkerCollectionView({
					collection: markerCollection
				});
				markerCollectionView.render();
			}
		});
	});	
	google.maps.event.addDomListener(map, 'zoom_changed', function () {
		console.log('zoom_changed');
	});

	markerModelView.render();
	// markerCollectionView.render();
	// App.mainRigion.show(markerCollectionView);

});