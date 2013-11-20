'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', [ '$scope', 'Phone',
		function($scope, Phone) {
			$scope.phones = Phone.query();
			$scope.orderProp = 'age';
		} ]);

phonecatControllers.controller('PhoneDetailCtrl', [ '$scope', '$routeParams',
		'Phone', function($scope, $routeParams, Phone) {
			$scope.phone = Phone.get({
				phoneId : $routeParams.phoneId
			}, function(phone) {
				$scope.mainImageUrl = phone.images[0];
			});
			$scope.setImage = function(imageUrl) {
				$scope.mainImageUrl = imageUrl;
			}
		} ]);

var orderControllers = angular.module('orderControllers', []);

orderControllers.controller('VehicleListCtrl', [ '$scope', 'Vehicle',
		function($scope, Vehicle) {
			$scope.vehicles = Vehicle.query();
		} ]);

orderControllers.controller('ComponentListCtrl', [ '$scope', 'Component',
 		function($scope, Component) {
 			$scope.components = Component.query();
 		} ]);

phonecatControllers.controller('ComponentDetailCtrl', [ '$scope', '$routeParams','Component',
        function($scope, $routeParams, Component) {
			$scope.component = Component.get({
				componentId : $routeParams.componentId
			}, function(component) {
				$scope.mainImageUrl = component.images[0];
			});
			$scope.setImage = function(imageUrl) {
				$scope.mainImageUrl = imageUrl;
			}
		} ]);