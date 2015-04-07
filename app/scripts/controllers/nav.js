'use strict';

/**
 * @ngdoc function
 * @name dataPortalApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the dataPortalApp
 */
angular.module('dataPortalApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.navClass = function(page){
    	var currentRoute = $location.path().substring(1) || 'learn';
    	return page === currentRoute ? 'active' : '';
    };
  });
