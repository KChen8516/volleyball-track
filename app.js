'use strict';

//the empty array can hold module dependencies that will be available via dependency injection at run time
var volleyballApp = angular.module('volleyTrackApp', [
	'ngRoute',
	'volleyTrackControllers'
]);

volleyballApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'templates/player-table.html',
			controller: 'MainCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);