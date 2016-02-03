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
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
          category: function($q, $route, MoltinAuth) {
            var deffered = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category) {
                deffered.resolve(category);
              });
            })
            return deffered.promise;
          },
          products: function($q, $route, MoltinAuth) {
            var deffered = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products) {
                deffered.resolve(products);
              });
            })
            return deffered.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
          product: function($q, $route, MoltinAuth) {
            var deffered = $q.defer();
            $q.when(MoltinAuth).then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deffered.resolve(product);
              });
            })
            return deffered.promise;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
