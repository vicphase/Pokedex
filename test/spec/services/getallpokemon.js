'use strict';

describe('Service: getAllPokemon', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var getAllPokemon;
  beforeEach(inject(function (_getAllPokemon_) {
    getAllPokemon = _getAllPokemon_;
  }));

  it('should do something', function () {
    expect(!!getAllPokemon).toBe(true);
  });

});
