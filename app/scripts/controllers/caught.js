'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:CaughtCtrl
 * @description
 * # CaughtCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('CaughtCtrl', function ($rootScope, $scope) {
   var vm = this;

   this.caught=$rootScope.caught;
   
    //Filter pokemon by name
    $scope.query = {};
    $scope.name = 'name';
    

  });
