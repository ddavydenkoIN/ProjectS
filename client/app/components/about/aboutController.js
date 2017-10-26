'use strict';

AboutController.$inject = ['$scope', 'TodosList'];

function AboutController($scope, TodosList) {
	$scope.listOfTodos = TodosList.list;
}
module.exports = AboutController;
