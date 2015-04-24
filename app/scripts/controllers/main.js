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


     //Scrolls page to the selected section
     $scope.scrollTo = function(id) {
          
          $location.hash(id);
          $anchorScroll();

     };     
          
     //keeps column elements at same hight to align buttons
     
     angular.element('.viz-title-1').responsiveEqualHeightGrid();
     angular.element('.viz-content-1').responsiveEqualHeightGrid();
     angular.element('.viz-title-2').responsiveEqualHeightGrid();
     angular.element('.viz-content-2').responsiveEqualHeightGrid();
     angular.element('.viz-title-3').responsiveEqualHeightGrid();
     angular.element('.viz-content-3').responsiveEqualHeightGrid();

     
        





  });
