'use strict';
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 80;
var date = new Date();

app.use(express.static(path.join(__dirname+"/bower_components")));
app.use(express.static(path.join(__dirname+"/static")));

app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname+'/index.html'));
  console.log(date.toString()+": Get request To "+ request.url +" From "+ request.ip);
});

app.listen(port);
console.log("server lisneting on "+port);