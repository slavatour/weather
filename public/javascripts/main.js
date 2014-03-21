$(document).ready(function () {

	function initialize() {
		var map;
		var markers = [];
		var infowindows = [];
		var mapOptions = {
			zoom: 6,
			center: new google.maps.LatLng(50, 30)
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		google.maps.event.addListener(map, 'click', function(event) {
		    placeMarker(event.latLng);
		  });
		
		function placeMarker(location) {
			getWeather(location.k, location.A);
			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(null);
			};
			var marker = new google.maps.Marker({
				position: location,
				// map: map,
				draggable:true,
			    // animation: google.maps.Animation.DROP,
			});
			markers.push(marker);
			marker.setMap(map);
			var innerContent = $('.weather').clone().html();
			var infowindow = new google.maps.InfoWindow({
			    content: 'Change the zoom level',
				position: location
			});
			for (var i = 0; i < infowindows.length; i++) {
				infowindows[i].close();
			};
			infowindows.push(infowindow);
			infowindow.open(map);
			infowindow.setContent(innerContent);
		}
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
	function getWeather (latitude, longitude) {
		var address = 'http://api.worldweatheronline.com/free/v1/weather.ashx?key=r2ep3zj2uwzyjv4pp8bt425d&q='+
			latitude+','+longitude+'&fx=no&format=json&num_of_days=2014-04-26';
		$.ajax({
			crossDomain: true,
			type: 'get',
			// contentType: "application/json; charset=utf-8",
			url: address,
			dataType: "jsonp",
			success: function (data, dataType, status) {
				// console.log(data);
				viewResult (data);
			}
		});
	}

	function viewResult (data) {
		var result = data;
		var weatherCode = result.data.current_condition[0].weatherCode;
		var temperature = result.data.current_condition[0].temp_C;
		var humidity = result.data.current_condition[0].humidity;
		var windSpeed = result.data.current_condition[0].windspeedKmph;
		var windPoint = result.data.current_condition[0].winddir16Point;
		console.log(result.data.current_condition[0]);
		$('.weatherResult .temperature').html(temperature+'<sup><small>0</small></sup>C');
		$('.weatherResult .humidity').html('humidity: <b>'+humidity+'%</b>');
		$('.weatherResult .windSpeed').html('wind speed: <b>'+windSpeed+'km/\h</b>');

		//get weather code
		$.get('/libs/codes.json', function (data) {
			var codes = data;
			$('.weatherResult .weatherPhoto').css('background', codes[weatherCode]);
		});
		$.get('/libs/windPoint.json', function (data) {
			var points = data;
			 $('.weatherResult .windPoint b').text(points[windPoint]);
		});
	}
	
});