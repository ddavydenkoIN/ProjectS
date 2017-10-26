
'use strict';

var AppHeaderDirective = require('./directives/headerDirective');
var MapService = require('./services/mapService')

angular.module('App.shared', [])
    .directive('appHeader', AppHeaderDirective)
    .service('mapService', MapService)
    .name;
