'use strict';

/**
 * @ngdoc directive
 * @name pokedexApp.directive:pokemon
 * @description
 * # pokemon
 */
angular.module('pokedexApp')
  .directive('pokemon', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/templates/pokemon.html'
    };
  });
