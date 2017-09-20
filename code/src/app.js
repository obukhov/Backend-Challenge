var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var libs = process.cwd() + '/src/';

var config = require('./config');
var log = require('./log')(module);

var articles = require('./routes/articles');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/articles', articles);

// catch 404 and forward to error handler
app.use(function(req, res, next){
    res.status(404);
    log.debug('%s %d %s', req.method, res.statusCode, req.url);
    res.json({
    	error: 'Not found'
    });
    return;
});

// error handlers
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('%s %d %s', req.method, res.statusCode, err.message);
    res.json({
    	error: err.message
    });
    return;
});

module.exports = app;
