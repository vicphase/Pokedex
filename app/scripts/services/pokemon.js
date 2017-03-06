'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.pokemon
 * @description
 * # pokemon
 * Factory in the pokedexApp.
 */
angular.module('pokedexApp')
  .factory('pokemon', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      all: function () {
          return $http({method: 'GET', url: '../../data/pokemons.json'});
      }
    };
  });
