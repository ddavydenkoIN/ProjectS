'use strict';

MapService.$inject = ['$http'];
function MapService($http) {
	function saveMarkers(markers) {
        var config = {
            method: "POST",
            url: "map/saveMarkers",
            data: markers
        }
        return $http(config);
    }
    
	function getAllMarkers(markers) {
        var config = {
            method: "GET",
            url: "map/getMarkers"
        }
        return $http(config);
    }

    function getMarkersByCategory(category) {
        var config = {
            method: "GET",
            url: "map/getByCategory",
            params: {
                type: category
            }
        }
        return $http(config);
    }
    return {
        saveMarkers: saveMarkers,
        getAllMarkers: getAllMarkers,
        getMarkersByCategory: getMarkersByCategory
    };
}

module.exports = MapService;
