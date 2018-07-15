'use strict';

describe('Controller: WomenCtrl', function () {

  // load the controller's module
  beforeEach(module('achatsApp'));

  var WomenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WomenCtrl = $controller('WomenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WomenCtrl.awesomeThings.length).toBe(3);
  });
});
