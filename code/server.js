var debug = require('debug')('restapi');

var libs = process.cwd() + '/src/';
var config = require(libs + 'config');
var log = require(libs + 'log')(module);
var app = require(libs + 'app');

debug('Starting...' + config.get('port'));
log.info('Starting...' + config.get('port'));

app.set('port', process.env.PORT || config.get('port') || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + app.get('port'));
  log.info('Express server listening on port ' + app.get('port'));
});
