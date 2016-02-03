'use strict';

/**
 * @ngdoc function
 * @name frontShopApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the frontShopApp
 */
angular.module('frontShopApp')
  .controller('ProductCtrl', function ($scope, product) {
    $scope.product = product;
    console.log(product);
  });
