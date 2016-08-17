'use strict';

/**
 * @ngdoc overview
 * @name deploydApp
 * @description
 * # deploydApp
 *
 * Main module of the application.
 */
angular
  .module('deploydApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('LoginCtrl', function ($scope) {
    $scope.loginHandler = function(){
      console.log("Logging in")
    }
  });
