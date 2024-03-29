var mongoose = require('mongoose')
	, fs = require('fs')
// bootstrap db connection
// Connect to mongodb
var connect = function () {
	var options = { server: {socketOptions: { keepAlive: 1 } } }
	mongoose.connect('mongodb://localhost/test35', options)
}
connect();
// Error handler
mongoose.connection.on('error', function (err) {
	console.log(err);
})
// Reconnect when closed
mongoose.connection.on('disconnected', function () {
	connect();
})
// Bootstrap models
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function (file) {
	if (~file.indexOf('.js')) require (models_path + '/' + file)
})