'use strict';

/**
 * @ngdoc directive
 * @name dataPortalApp.directive:cartoDB
 * @description
 * # cartoDB
 */
angular.module('dataPortalApp')
  .directive('cartoDB', function (mapId, layerUrlId) {
    return {
      templateUrl: '../app/views/main.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the cartoDB directive');

        // use default options if nothing is specified in the attributes
        // $eval is needed to evaluate the observed attribute expression
        var mapOptions = {
          shareable: (attrs.shareable) ? scope.$eval(attrs.shareable) : false, //shareable
          title: (attrs.title) ? scope.$eval(attrs.title) : false, //title
          description: (attrs.description) ? scope.$eval(attrs.description) : false, //description
          searchControl: (attrs.searchControl) ? scope.$eval(attrs.searchControl) : false, //search-control
          zoomControl: (attrs.zoomControl) ? scope.$eval(attrs.zoomControl) : false, //zoom-control
          loaderControl: (attrs.loaderControl) ? scope.$eval(attrs.loaderControl) : false, //loader-control
          center_lat: (attrs.centerLat) ? scope.$eval(attrs.centerLat) : 42.3, //center-lat
          center_lon: (attrs.centerLon) ? scope.$eval(attrs.centerLon) : -71.8, //center-lon
          zoom: (attrs.zoom) ? scope.$eval(attrs.zoom) : 8, //zoom
          cartodb_logo: (attrs.cartodbLogo) ? scope.$eval(attrs.cartodbLogo) : false, //cartodb-logo
          infowindow: (attrs.infowindow) ? scope.$eval(attrs.infowindow) : false, //attrs.infowindow
          layer_selector: (attrs.layerSelector) ? scope.$eval(attrs.layerSelector) : false, //layer-selector
          legends: (attrs.legends) ? scope.$eval(attrs.legends) : false, //legends
          https: (attrs.https) ? scope.$eval(attrs.https):  false, //https
          scrollWheel: (attrs.scrollWheel) ? scope.$eval(attrs.scrollWheel): false, //scroll-wheel
          fullscreen: (attrs.fullscreen) ? scope.$eval(attrs.fullscreen) : false //fullscreen
        };

        cartodb.createVis(mapId, layerUrlId, mapOptions)
        .done(function(vis, layers) {
          // Assign map variables to the $scope so we can do stuff with them.
          // We must use $apply because the done() callback does not trigger a $digest cycle.
          scope.$apply(function() {
            scope.vis = vis;
            scope.basemap = layers[0];
            scope.mapLayers = layers[1];
          });
        })
        .error(function(err) {
          console.log(err);
        });
      }
    };
  });
