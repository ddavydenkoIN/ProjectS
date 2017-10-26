webpackJsonp([0],[function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(6),__webpack_require__(9);var appModule=angular.module("App",["App.components","App.shared","ui.router"]);appModule.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/home"),$stateProvider.state("home",{templateUrl:"client/app/components/home/home.html",controller:"HomeController",url:"/home"}).state("about",{templateUrl:"client/app/components/about/about.html",controller:"AboutController",url:"/about"}).state("author",{templateUrl:"client/app/components/author/author.html",controller:"AuthorController",url:"/author"})}])},function(module,exports,__webpack_require__){"use strict";var aboutController=__webpack_require__(3),homeController=__webpack_require__(4),authorController=__webpack_require__(5),toDosList=__webpack_require__(14);angular.module("App.components",[]).value("TodosList",toDosList).controller("HomeController",homeController).controller("AboutController",aboutController).controller("AuthorController",authorController).name},function(module,exports){"use strict";function AboutController($scope,TodosList){$scope.listOfTodos=TodosList.list}AboutController.$inject=["$scope","TodosList"],module.exports=AboutController},function(module,exports){"use strict";function HomeController($scope,mapService){$scope.categories=[{label:"Schools",type:"school"},{label:"Gas Stations",type:"gas-station"},{label:"Restaurants",type:"restaurant"},{label:"Pharmacies",type:"pharmacy"}];var DUKS_LOCATION=[46.4881,30.74104],veryScaryText="CIA is on the move.";$scope.coordinatesArray=[],$scope.map,$scope.initMap=function(){DG.then(function(){var myLocation=$scope.$root.myLocation?$scope.$root.myLocation:DUKS_LOCATION;$scope.map=void 0,$scope.map=DG.map("map",{center:myLocation,zoom:13}),$scope.setMyLocation(),$scope.markersGroup=DG.featureGroup(),DG.marker(myLocation).addTo($scope.map).bindPopup("Place to appear on most photos."),$scope.setCreateMarkerOnPin()})},$scope.setCreateMarkerOnPin=function(){$scope.map.on("click",function(ev){DG.marker(ev.latlng).addTo($scope.markersGroup).addTo($scope.map),$scope.coordinatesArray.push(ev.latlng)})},$scope.drawMarkersOnMap=function(data){$scope.markersGroup&&($scope.markersGroup.clearLayers(),data.forEach(function(coordinates){DG.marker(coordinates).addTo($scope.markersGroup)}),$scope.markersGroup.addTo($scope.map),$scope.map.fitBounds($scope.markersGroup.getBounds()))},$scope.showAllMarkers=function(){mapService.getAllMarkers().then(function(response){$scope.drawMarkersOnMap(response.data)}),$scope.markersHadBeenHidden=!1},$scope.saveMarkers=function(){mapService.saveMarkers($scope.coordinatesArray)},$scope.setMyLocation=function(){$scope.map.locate({setView:!0,watch:!0}).on("locationfound",function(e){$scope.map.center=[e.latitude,e.longitude],$scope.$root.myLocation=[e.latitude,e.longitude],DG.marker([e.latitude,e.longitude]).addTo($scope.map).bindPopup("You are here. "+veryScaryText).openPopup().bindLabel(veryScaryText)}).on("locationerror",function(e){DG.popup().setLatLng($scope.map.getCenter()).setContent("Доступ к определению местоположения отключён").openOn($scope.map)})},$scope.$watch("selectedCategory",function(newCategory,oldCategory){void 0!=newCategory&&mapService.getMarkersByCategory(newCategory).then(function(resp){$scope.drawMarkersOnMap(resp.data)})}),$scope.hideMarkers=function(){$scope.markersGroup.clearLayers(),$scope.markersHadBeenHidden=!0}}HomeController.$inject=["$scope","mapService"],module.exports=HomeController},function(module,exports){"use strict";function AuthorController($scope){}AuthorController.$inject=["$scope"],module.exports=AuthorController},function(module,exports,__webpack_require__){"use strict";var AppHeaderDirective=__webpack_require__(7),MapService=__webpack_require__(8);angular.module("App.shared",[]).directive("appHeader",AppHeaderDirective).service("mapService",MapService).name},function(module,exports){"use strict";function appHeaderDirective(){return{restrict:"E",templateUrl:"client/app/shared/templates/headerTemplate.html",replace:!0}}module.exports=appHeaderDirective},function(module,exports){"use strict";function MapService($http){function saveMarkers(markers){var config={method:"POST",url:"map/saveMarkers",data:markers};return $http(config)}function getAllMarkers(markers){var config={method:"GET",url:"map/getMarkers"};return $http(config)}function getMarkersByCategory(category){var config={method:"GET",url:"map/getByCategory",params:{type:category}};return $http(config)}return{saveMarkers:saveMarkers,getAllMarkers:getAllMarkers,getMarkersByCategory:getMarkersByCategory}}MapService.$inject=["$http"],module.exports=MapService},function(module,exports){},,,,,function(module,exports){"use strict";var TodosList={list:[{jist:"git",description:"Create a git repository on github.com",completed:!0},{jist:"version",description:"Use AngularJS 1st version",completed:!0},{jist:"webpack",description:"Configure webpack.config.js",completed:!0,subitems:[{description:"Babel + es6",completed:!0},{description:"Less to css compilation. USED scss instead.",completed:!1},{description:"Implement NORMAL PROJECT ARCHITECTURE(.gitignore, src, build, each component should be presented in separated files using es6 module system)",completed:!0}]},{jist:"simple markup",description:"Create some simple markup (of course use routing for the pages, we create SPA)",completed:!0,subitems:[{description:"Authorization",completed:!1},{description:"Main page",completed:!0},{description:"About author",completed:!0}]},{jist:"map",description:"Draw simple map with point of your geolocation",completed:!0,subitems:[{description:"Implement zoom in/out buttons on a map",completed:!0},{description:"Click on a map has to create a marker",completed:!0}]},{jist:"save and show",description:"Implement save and show buttons",completed:!0,subitems:[{description:"save button saves all the created markers, show button – shows it",completed:!0},{description:"When clicking on the save button all markers should be sent to the server",completed:!0}]},{jist:"back-end",description:"Create a back-end ",completed:!0,subitems:[{description:"(node.js + express + mongodb)",completed:!0},{description:"Create  a user api",completed:!0},{description:"Create an api to save location array",completed:!0},{description:"Create a GET request to fetch all saving markers",completed:!0}]},{jist:"create list",description:"Create list with type of objects to be chosen(pharmacies, gas stations, schools,  restaurants)so click on the list item has to draw markers on the map with the closest chosen objects",completed:!0}]};module.exports=TodosList}]);
//# sourceMappingURL=app.bundle.js.map