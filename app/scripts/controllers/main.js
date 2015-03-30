'use strict';

/**
 * @ngdoc function
 * @name dataPortalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataPortalApp
 */
angular.module('dataPortalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
