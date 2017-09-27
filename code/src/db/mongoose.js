var mongoose = require('mongoose');

// Use native promises
mongoose.Promise = global.Promise;

var libs = process.cwd() + '/src/';

var log = require(libs + 'log')(module);
var config = require(libs + 'config');

mongoose.connect(config.get('mongoose:uri'), {useMongoClient: true});

var db = mongoose.connection;

db.on('error', function (err) {
	log.error('Connection error:', err.message);
});

db.once('open', function callback () {
	log.info("Connected to DB!");
});

module.exports = mongoose;
