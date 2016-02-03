'use strict';

/**
 * @ngdoc overview
 * @name frontShopApp
 * @description
 * # frontShopApp
 *
 * Main module of the application.
 */
angular
  .module('frontShopApp', [
    'frontShopApp.moltin',
    'ngAnimate',
    'ngCookies',
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
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        resolve: {
          categories: function($q, MoltinAuth) {
            var deffered = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(categories) {
                deffered.resolve(categories);
              });
            })
            return deffered.promise;
          }
        }
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
