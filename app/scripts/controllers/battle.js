'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:BattleCtrl
 * @description
 * # BattleCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('BattleCtrl', function ($rootScope, $scope) {
   var vm = this;

   this.caught=$rootScope.caught;
   
    //Filter pokemon by name
    $scope.query = {};
    $scope.name = 'name';
  });
