'use strict';

describe('Controller: MenCtrl', function () {

  // load the controller's module
  beforeEach(module('achatsApp'));

  var MenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenCtrl = $controller('MenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenCtrl.awesomeThings.length).toBe(3);
  });
});
