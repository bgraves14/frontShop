'use strict';

/**
 * @ngdoc function
 * @name frontShopApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the frontShopApp
 */
angular.module('frontShopApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
  });
