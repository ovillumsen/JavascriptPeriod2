
var logger = require('morgan');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var app = express();
app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(logger('dev'));
app.get('/', function(req, res){
  res.send('hello world');
});
module.exports= app;
