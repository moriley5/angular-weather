var app = angular.module("TravelDestinations", []);

angular.module("TravelDestinations").controller("travelDestinationsController", ["$scope", "$http", "$q", function ($scope, $http, $q) {
	$scope.apiKey = "378fbff9da05b8b97f22744f6b22251e";


	$scope.isColoradoDataLoaded = false;
	$scope.showColoradoImage = true;
	$scope.coloradoData = {
		currentTemperature: 0
	};

	$scope.isGreeceDataLoaded = false;
	$scope.showGreeceImage = true;
	$scope.greeceData = {
		currentTemperature: 0
	};

	$scope.isIrelandDataLoaded = false;
	$scope.showIrelandImage = true;
	$scope.irelandData = {
		currentTemperature: 0
	};

	$scope.isMexicoDataLoaded = false;
	$scope.showMexicoImage = true;
	$scope.mexicoData = {
		currentTemperature: 0
	};

	$scope.isMichicagnDataLoaded = false;
	$scope.showMichiganImage = true;
	$scope.michiganData = {
		currentTemperature: 0
	};

	$scope.isNewYorkDataLoaded = false;
	$scope.showNewYorkImage = true;
	$scope.newYorkData = {
		currentTemperature: 0
	};

	$scope.onColoradoClick = function() {
		if ($scope.isColoradoDataLoaded) {
			$scope.showColoradoImage = !$scope.showColoradoImage;
			return;
		} else {
			var longitude = 105.7821;
			var latitude = 39.5501;

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.coloradoData.currentTemperature = response.data.currently.temperature;
				$scope.coloradoData.summary = response.data.currently.summary				
				$scope.showColoradoImage = false;
				$scope.isColoradoDataLoaded = true;
			});
		}
	}

	$scope.onGreeceClick = function() {
		if ($scope.isGreeceDataLoaded) {
			$scope.showGreeceImage = !$scope.showGreeceImage;
			return;
		} else {
			var longitude = 21.8243;
			var latitude = 39.0742;

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.greeceData.currentTemperature = response.data.currently.temperature;
				$scope.greeceData.summary = response.data.currently.summary
				$scope.showGreeceImage = false;
				$scope.isGreeceDataLoaded = true;
			});
		}
	}

	$scope.onIrelandClick = function() {
		if ($scope.isIrelandDataLoaded) {
			$scope.showIrelandImage = !$scope.showIrelandImage;
			return;
		} else {
			var longitude = 8.2439;
			var latitude = 53.4129;

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.irelandData.currentTemperature = response.data.currently.temperature;
				$scope.irelandData.summary = response.data.currently.summary
				$scope.showIrelandImage = false;
				$scope.isIrelandDataLoaded = true;
			});
		}
	}

	$scope.onMexicoClick = function() {
		if ($scope.isMexicoDataLoaded) {
			$scope.showMexicoImage = !$scope.showMexicoImage;
			return;
		} else {
			var longitude = 102.5528;
			var latitude = 23.6345;

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.mexicoData.currentTemperature = response.data.currently.temperature;
				$scope.mexicoData.summary = response.data.currently.summary
				$scope.showMexicoImage = false;
				$scope.isMexicoDataLoaded = true;
			});
		}
	}

	$scope.onMichiganClick = function() {
		if ($scope.isMichiganDataLoaded) {
			$scope.showMichiganImage = !$scope.showMichiganImage;
			return;
		} else {
			var longitude = 84.6597;
			var latitude = 43.3789;

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.michiganData.currentTemperature = response.data.currently.temperature;
				$scope.michiganData.summary = response.data.currently.summary
				$scope.showMichiganImage = false;
				$scope.isMichiganDataLoaded = true;
			});
		}
	}

	$scope.onNewYorkClick = function() {
		if ($scope.isNewYorkDataLoaded) {
			$scope.showNewYorkImage = !$scope.showNewYorkImage;
			return;
		} else {
			var longitude = -74.0059;
			var latitude = 40.7128; 

			$scope.getDarkSkyData(latitude, longitude).then(function(response) {
				$scope.newYorkData.currentTemperature = response.data.currently.temperature;
				$scope.newYorkData.summary = response.data.currently.summary
				$scope.showNewYorkImage = false;
				$scope.isNewYorkDataLoaded = true;
			});
		}
	}

	$scope.getDarkSkyData = function(latitude, longitude) {
		var deferred = $q.defer();
		var url = "https://api.darksky.net/forecast/" + $scope.apiKey + "/" + latitude + "," + longitude + "?callback=JSON_CALLBACK";

		$http.jsonp(url).then(function (response) {
			// console.log(response);
			deferred.resolve(response);
		}, function(error) {
			console.log(error);
			deferred.reject(error);
		});

		return deferred.promise;
	}
}]);