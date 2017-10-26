
'use strict';

var mapDataLoader = require('./map_routes.js');

module.exports = function (app, db) {
	mapDataLoader(app, db);
};