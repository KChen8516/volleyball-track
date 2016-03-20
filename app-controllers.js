'use strict';

var volleyTrackControllers = angular.module('volleyTrackControllers', []);

volleyTrackControllers.controller('MainCtrl', function($scope){
	
	$scope.players = [
		{name: "Valerie Tam", city: 'Los Altos', id: 2},
		{name: "Kai Chen", city: 'Fremont', id: 1},
		{name: "Gabe Guerra", city: 'Fremont', id: 3}
	];
	
	$scope.getPlayer = function (id) {
		return $scope.players
	}
});



