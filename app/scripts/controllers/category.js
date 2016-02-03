'use strict';

/**
 * @ngdoc function
 * @name frontShopApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the frontShopApp
 */
angular.module('frontShopApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  });
