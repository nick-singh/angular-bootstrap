/*
 *	This is the main js file
 */
'use strict';

	angular.module('cctools',
	[		
		'ngRoute',
		'ui.bootstrap',
		'cctools.HomeCtrl'
	])

	// main controller
	.controller("ApplicationController", function($scope, $window, $rootScope){
		$scope.inProgress = false;
		$scope.events = [];

	})

	.config(function($routeProvider) {
	    $routeProvider

			.when('/',
			{
				controller : 'homeCtrl',
				templateUrl : 'partials/home.html'
			})
			
			.otherwise({redirectTo : '/'});
	});