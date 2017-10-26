/*jslint nomen:true*/


var express 	= require("express");
var path 		= require("path");
var bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const db        = require('../config/db');
var app 		= express();
const port      = 8080;

app.set('views', __dirname + '/../');

app.use(express["static"](path.join(__dirname, '../')));

app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
  	require('./routes/index')(app, database);
    app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
});