'use strict';

describe('Controller: BattleCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var BattleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BattleCtrl = $controller('BattleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BattleCtrl.awesomeThings.length).toBe(3);
  });
});
