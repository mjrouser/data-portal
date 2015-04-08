'use strict';

/**
 * @ngdoc function
 * @name dataPortalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataPortalApp
 */
angular.module('dataPortalApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
  	//Functions for in-page nav
     $scope.gotoLearn = function(){
     	$location.hash('learn');

     	$anchorScroll();
     };
     $scope.gotoExplore = function(){
     	$location.hash('explore');

     	$anchorScroll();
     };
     $scope.gotoBuild = function(){
     	$location.hash('build');

     	$anchorScroll();
     };
     //keeps column elements at same hight to alight buttons
     angular.element('.viz-content').responsiveEqualHeightGrid();
     angular.element('.viz-title').responsiveEqualHeightGrid();
     angular.element('.viz-content-2').responsiveEqualHeightGrid();

  });
