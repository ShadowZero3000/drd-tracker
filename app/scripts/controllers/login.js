'use strict';

/**
 * @ngdoc function
 * @name deploydApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the deploydApp
 */
angular.module('deploydApp')
  .controller('LoginCtrl', function () {
    this.textthing="Hi there";
    console.log(this.textthing);
    console.log(this);
  });
