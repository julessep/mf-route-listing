'use strict';

let roadApp = angular.module("RoadApp", ["ngRoute"])

roadApp.config( ($routeProvider) => {
  $routeProvider
  .when('/highway101', {
    templateUrl: 'partials/highway101.html',
    controller: '101Controller'
  })
  .when('/sdfreeway', {
    templateUrl: 'partials/sd-freeway.html',
    controller: 'SdController'
  })
  .otherwise('/');

});