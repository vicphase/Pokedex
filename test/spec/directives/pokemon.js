'use strict';

describe('Directive: pokemon', function () {

  // load the directive's module
  beforeEach(module('pokedexApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pokemon></pokemon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pokemon directive');
  }));
});
