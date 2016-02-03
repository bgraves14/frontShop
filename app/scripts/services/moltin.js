angular.module('frontShopApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deffered = $q.defer();
    var moltin = new Moltin({publicId: 'csAgIlC0rLsS8LdicixALSZoWQa0RHYBiqWXZr9d'});
    moltin.Authenticate(function() {
      deffered.resolve(moltin);
    });

    return deffered.promise;
  });
