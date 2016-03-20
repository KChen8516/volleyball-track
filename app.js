'use strict';

//the empty array can hold module dependencies that will be available via dependency injection at run time
var volleyballApp = angular.module('volleyTrackApp', [
	'ui.router',
	'volleyTrackControllers'
]);

volleyballApp.config(['$stateProvider', '$urlRouterProvider', 
	function ($stateProvider, $urlRouterProvider) {
		//For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/home');
		
		//Setting up main states
		$stateProvider
			.state('playerTable', {
				url: '/home',
				templateUrl: 'templates/player-table.html',
				controller: 'MainCtrl'
			})
			.state('scoreKeeper', {
				url: '/player/:id',
				templateUrl: 'templates/score-keeper.html',
				controller: 'MainCtrl'
			});
}]);