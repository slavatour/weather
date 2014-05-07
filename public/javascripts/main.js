$(document).ready(function () {

	window.App = new Marionette.Application();
	App.addRegions({
		mainRigion: "#mainDiv"
	});

	App.on("initialize:after", function () {
		if(Backbone.history){
			Backbone.history.start();
		}
	});
	$('#dateFrom').datepicker({
		minDate: new Date(), // off vallaibility choose past dates
		showOthetMons: true
	});
	$('#dateTo').datepicker({
		minDate: new Date(), // off vallaibility choose past dates
		showOthetMons: true
	});
});