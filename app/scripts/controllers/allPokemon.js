'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:AllpokemonCtrl
 * @description
 * # AllpokemonCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('AllPokemonCtrl', function (pokemon, $http, $q) {
      var vm=this;
      pokemon.all()
    .then(function(data){
    vm.pokemons=data.data;
     
    // vm.pokemons.forEach(function(item){
     
    //  item.name=capitalizeFirstLetter(item.name);
 
    // });
   });
  });
