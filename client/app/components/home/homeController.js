'use strict';

HomeController.$inject = ['$scope', 'mapService'];

function HomeController($scope, mapService) {
    $scope.categories = [
        {label: "Schools", type: "school"},
        {label: "Gas Stations",type: "gas-station"},
        {label: "Restaurants",type: "restaurant"},
        {label: "Pharmacies",type: "pharmacy"}
    ];
    const DUKS_LOCATION = [46.48810, 30.74104];
    const veryScaryText = 'CIA is on the move.';
    $scope.coordinatesArray = [];
    $scope.map;

    $scope.initMap = function() {
        DG.then(function () {
            var myLocation = $scope.$root.myLocation ? $scope.$root.myLocation : DUKS_LOCATION;
            $scope.map= undefined;
            $scope.map = DG.map('map', {
                center: myLocation,
                zoom: 13
            });
            $scope.setMyLocation();

            $scope.markersGroup = DG.featureGroup();

            DG.marker(myLocation).addTo($scope.map).bindPopup('Place to appear on most photos.');

            $scope.setCreateMarkerOnPin();

        });
    };

    $scope.setCreateMarkerOnPin = function() {
        $scope.map.on('click', function(ev) {
            DG.marker(ev.latlng).addTo($scope.markersGroup).addTo($scope.map);
            $scope.coordinatesArray.push(ev.latlng);
        });
    };

    $scope.drawMarkersOnMap = function(data) {
        if ($scope.markersGroup) {
            $scope.markersGroup.clearLayers();
            data.forEach(function(coordinates) {
                DG.marker(coordinates).addTo($scope.markersGroup);
            });
            $scope.markersGroup.addTo($scope.map);
            $scope.map.fitBounds($scope.markersGroup.getBounds());
        }
    }

    $scope.showAllMarkers = function() {
        mapService.getAllMarkers().then(function(response) {
            $scope.drawMarkersOnMap(response.data);
        });
        $scope.markersHadBeenHidden = false;
    };

    $scope.saveMarkers = function() {
        mapService.saveMarkers($scope.coordinatesArray);
    };

    $scope.setMyLocation = function() {
        $scope.map.locate({setView: true, watch: true})
            .on('locationfound', function(e) {
                $scope.map.center = [e.latitude, e.longitude];
                $scope.$root.myLocation = [e.latitude, e.longitude];
                DG.marker([e.latitude, e.longitude])
                    .addTo($scope.map)
                    .bindPopup('You are here. ' + veryScaryText)
                    .openPopup()
                    .bindLabel(veryScaryText);
            })
            .on('locationerror', function(e) {
                DG.popup()
                  .setLatLng($scope.map.getCenter())
                  .setContent('Доступ к определению местоположения отключён')
                  .openOn($scope.map);
        });
    };

    $scope.$watch('selectedCategory', function(newCategory,  oldCategory) {
        if (newCategory != undefined) {
            mapService.getMarkersByCategory(newCategory).then(function(resp) {
                $scope.drawMarkersOnMap(resp.data);
            });
        }
    });

    $scope.hideMarkers = function(){
        $scope.markersGroup.clearLayers();
        $scope.markersHadBeenHidden = true;
    };
}

module.exports = HomeController;