var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/month', {
			templateUrl: 'month.html',
			controller: 'monthController'
		})
		.when('/day', {
			templateUrl: 'day.html',
			controller: 'dayController'
		})
		.when('/week', {
			templateUrl: 'week.html',
			controller: 'weekController'
		})
		.otherwise({
			redirectTo: '/month'
		});
});

mainApp.controller('monthController', function($scope) {
	$scope.message = "This is the month view";

	$scope.months = [
		{code: 1, name:'January'},
		{code: 2, name:'February'},
		{code: 3, name:'March'}
	];
});

mainApp.controller('dayController', function($scope) {
	$scope.day = ["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","Noon"];
});

mainApp.controller('weekController', function($scope) {
  $scope.message = "This is the week controller";
});
