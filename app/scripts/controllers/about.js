'use strict';

/**
 * @ngdoc function
 * @name travelIoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the travelIoApp
 */
angular.module('travelIoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
