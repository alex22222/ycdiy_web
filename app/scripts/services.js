'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('/ycdiy/rest/phones/list', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

var vehicleServices = angular.module('vehicleServices', ['ngResource']);

vehicleServices.factory('Vehicle', ['$resource',
  function($resource){
      var obj =
     $resource('http://localhost:8080/ycdiy/rest/vehicles/list', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
      return obj;
  }]);

var componentServices = angular.module('componentServices', ['ngResource']);

componentServices.factory('Component', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/ycdiy/rest/components/list', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);