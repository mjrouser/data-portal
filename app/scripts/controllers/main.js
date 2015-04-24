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
          //var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          //$location.hash(old);

     };


/*


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
     */
 /*
    
     //sticky for orange sub-nav
     angular.element(document).ready(function(){
     	angular.element('#sticky').affix({
     		offset:{
     			top: 475
     		}
     	});
     });



          angular.element('#sticky').affix({
               offset:{
                    top: 475
               }
          });
  */       
          
     //keeps column elements at same hight to align buttons
     
     angular.element('.viz-title-1').responsiveEqualHeightGrid();
     angular.element('.viz-content-1').responsiveEqualHeightGrid();
     // angular.element('.viz-title-2').responsiveEqualHeightGrid();
     // angular.element('.viz-content-2').responsiveEqualHeightGrid();
     angular.element('.viz-title-3').responsiveEqualHeightGrid();
     angular.element('.viz-content-3').responsiveEqualHeightGrid();

     
        





  });
