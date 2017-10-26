'use strict';

var aboutController = require('./about/aboutController');
var homeController = require('./home/homeController');
var authorController = require('./author/authorController');
var toDosList = require('./about/todosList');

angular.module('App.components', [])
	.value('TodosList', toDosList)
    .controller('HomeController', homeController)
    .controller('AboutController', aboutController)
    .controller('AuthorController', authorController)
    .name;