'use strict';

describe('Controller: AllpokemonCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var AllpokemonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllpokemonCtrl = $controller('AllpokemonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllpokemonCtrl.awesomeThings.length).toBe(3);
  });
});
