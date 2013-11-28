'use strict';

/* App Module */
var ycdiyStoreApp = angular.module('ycdiyStoreApp', [ 'ngRoute', 'ui.bootstrap',
 'vehicleServices', 'shoppingControllers','componentServices','orderServices','loginServices' ]);

ycdiyStoreApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/vehicle', {
		templateUrl : 'views/shopping/vehicle.html',
		controller : 'vehicleController'
	}).when('/store', {
        templateUrl: 'views/shopping/store.htm',
        controller: 'storeController'
    }). when('/products/:productCode', {
        templateUrl: 'views/shopping/product.htm',
        controller: 'storeController'
    }).when('/cart', {
        templateUrl: 'views/shopping/shoppingCart.htm',
        controller: 'storeController'
    }).when('/commit', {
        templateUrl: 'views/shopping/commit.html',
        controller: 'commitController'
    }).when('/feedback', {
        templateUrl: 'views/shopping/feedback.html',
        controller: 'commitController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).when('/registry', {
        templateUrl: 'views/registry.html',
        controller: 'loginController'
    }).otherwise({
		redirectTo : '/vehicle'
	});
} ]);

