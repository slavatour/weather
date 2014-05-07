$(document).ready(function () {
	
	var weatherModel = new App.WeatherForcast.Models.WeatherModel();
	weatherModel.url(30, 50);
	// weatherModel.fetch({ 
	// 	url: '/forcast/30/50',
	// 	success: function () {
	// 		console.log('ha');
	// 	}
	// });
	// var weatherCollection = new App.WeatherForcast.Collections.WeatherCollection({
	// 	model: weatherModel
	// });
	var weatherCollection = new App.WeatherForcast.Collections.WeatherCollection([
		{
			date: "02.02.2014",
			humidity: 60
		},
		{
			date: "01.02.2014",
			humidity: 160
		},
		{
			date: "03.02.2014",
			humidity: 260
		},
		{
			date: "04.02.2014",
			humidity: 360
		},
		{
			date: "05.02.2014",
			humidity: 360
		}
	]);
	var weatherModelView = new App.WeatherForcast.Views.WeatherModelView({
		model: weatherModel
	});
	var weatherCollectionView = new App.WeatherForcast.Views.WeatherCollectionView({
		collection: weatherCollection
	});
	// App.mainRigion.show(weatherCollectionView);
});