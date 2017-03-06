'use strict';

describe('Service: pokemonInfo', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var pokemonInfo;
  beforeEach(inject(function (_pokemonInfo_) {
    pokemonInfo = _pokemonInfo_;
  }));

  it('should do something', function () {
    expect(!!pokemonInfo).toBe(true);
  });

});
