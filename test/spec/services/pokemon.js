'use strict';

describe('Service: pokemon', function () {

  // load the service's module
  beforeEach(module('pokedexApp'));

  // instantiate service
  var pokemon;
  beforeEach(inject(function (_pokemon_) {
    pokemon = _pokemon_;
  }));

  it('should do something', function () {
    expect(!!pokemon).toBe(true);
  });

});
