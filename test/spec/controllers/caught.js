'use strict';

describe('Controller: CaughtCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var CaughtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaughtCtrl = $controller('CaughtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaughtCtrl.awesomeThings.length).toBe(3);
  });
});
