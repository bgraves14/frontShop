'use strict';

describe('Controller: PaymentCtrl', function () {

  // load the controller's module
  beforeEach(module('frontShopApp'));

  var PaymentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaymentCtrl = $controller('PaymentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
