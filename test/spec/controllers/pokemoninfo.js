'use strict';

describe('Controller: PokemoninfoCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var PokemoninfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokemoninfoCtrl = $controller('PokemoninfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PokemoninfoCtrl.awesomeThings.length).toBe(3);
  });
});
