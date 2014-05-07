
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();


var MarkersControllers = require('./controllers/MarkersControllers');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




var markersControllers = new MarkersControllers.MarkerController();


app.get('/forcast/:latitude/:longitude', function (req, res) {
	console.log(req.params.latitude);
	res.header();
	res.end();
});

app.get('/markers/:latitude/:longitude/:zoom', function (req, res) {
	var latitude = req.params.latitude;
	var longitude = req.params.longitude;
	var zoom = req.params.zoom;
	markersControllers.getMarkersCollection(latitude, longitude, zoom, function (data) {
		console.log(data);
		res.header();
		res.end(JSON.stringify(data));
	});
});
