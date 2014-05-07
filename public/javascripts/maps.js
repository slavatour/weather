$(document).ready(function () {
	App.module("Maps", function (Maps, App, Marionette, Backbone, $, _) {
		Maps.map = new google.maps.Map(document.getElementById('map-canvas'), {
			zoom: 5,
			center: new google.maps.LatLng(50.45, 30.50)
		}),
		Maps.initialize = function () {
			var map = App.Maps.map;
			var inputA = (document.getElementById('pac-input'));
			var inputB = (document.getElementById('pac-inputB'));
			App.Maps.inputSearch(map, inputA);
			App.Maps.inputSearch(map, inputB);
		},
		Maps.inputSearch = function (map, inputArr) {
			var markers = [];
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputArr);
			var searchBox = [];
			searchBox = new google.maps.places.SearchBox(inputArr);
			google.maps.event.addListener(searchBox, 'places_changed', function() {
			var places = searchBox.getPlaces();
			for (var i = 0, marker; marker = markers[i]; i++) {
			  marker.setMap(null);
			}
			
			// For each place, get the icon, place name, and location.
			markers = [];
			var bounds = new google.maps.LatLngBounds();
			for (var i = 0, place; place = places[i]; i++) {
			  var image = {
			    url: place.icon,
			    size: new google.maps.Size(71, 71),
			    origin: new google.maps.Point(0, 0),
			    anchor: new google.maps.Point(17, 34),
			    scaledSize: new google.maps.Size(25, 25)
			  };

			  // Create a marker for each place.
			  var marker = new google.maps.Marker({
			    map: map,
			    icon: image,
			    title: place.name,
			    position: place.geometry.location,
			  });

			  markers.push(marker);

			  bounds.extend(place.geometry.location);
			}
			google.maps.event.addListener(map, 'bounds_changed', function() {
				var bounds = map.getBounds();
				searchBox.setBounds(bounds);
			});

			map.fitBounds(bounds);
			});
		},
		Maps.setMarker = function (options) {
			var map = Maps.map;
			var icon = options['icon'];
			var content = options['content'];
			var marker = new MarkerWithLabel({
			    position: new google.maps.LatLng(options['latitude'], options['longitude']),
			    icon: icon,
			    labelContent: content,
				labelAnchor: new google.maps.Point(30, 20),
				labelClass: "labels", // the CSS class for the label
			});
			marker.setMap(map);
		}
	});
});
