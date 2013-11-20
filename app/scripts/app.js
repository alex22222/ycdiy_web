'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [ 'ngRoute', 'ui.bootstrap',
		'phonecatAnimations', 'phonecatControllers', 'phonecatFilters',
		'phonecatServices', 'vehicleServices', 'orderControllers','componentServices' ]);

phonecatApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/orders', {
		templateUrl : 'views/order/order.html',
		controller : 'VehicleListCtrl'
	}).when('/components/:vehicleId', {
		templateUrl : 'views/order/componentList.html',
		controller : 'ComponentListCtrl'
	}).when('/component/:componentId', {
		templateUrl : 'views/order/componentDetail.html',
		controller : 'ComponentDetailCtrl'
	}).otherwise({
		redirectTo : '/orders'
	});
} ]);

/*
var components = angular.module('components', [ 'ngRoute','kendo.directives',
		'componentControllers' ]);

components.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/templates/', {
		templateUrl : 'component.html',
		controller : 'ComponentGridCtrl'
	}).otherwise({
		redirectTo : '/admin.html'
	});
} ]);
*/