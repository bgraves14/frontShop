'use strict';

/**
 * @ngdoc function
 * @name frontShopApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the frontShopApp
 */
angular.module('frontShopApp')
  .controller('CartCtrl', function ($scope, cart) {
    $scope.cart = cart;
    console.log(cart);
  });
