angular.module('frontShopApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deffered = $q.defer()
    var moltin = new Moltin({publicId: });
    moltin.Authenticate(function() {

    });
  });
