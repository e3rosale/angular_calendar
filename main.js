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
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.message = "Click on the hyper link to view the students list.";
});

mainApp.controller('weekController', function() {
  $scope.message = "This is the week controller";
})
