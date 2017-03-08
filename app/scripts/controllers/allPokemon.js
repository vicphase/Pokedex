'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:AllpokemonCtrl
 * @description
 * # AllpokemonCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('AllPokemonCtrl', function (pokemon, $http, $q, $scope, $rootScope) {
      var vm=this;

    //Array of caught pokemon
    if($rootScope.caught === null || $rootScope.caught === undefined){
    $rootScope.caught = [];
    }

      //Filter pokemon by name
    $scope.query = {};
    $scope.name = 'name';
    
    //Array of caught pokemon
    if($rootScope.caught === null || $rootScope.caught === undefined){
    $rootScope.caught = [];
    }

    //Function to know if a pokemon is captured
   $rootScope.pokemonIsCaught= function(array, name){
    for(var i = 0; i < array.length; i++) {
    if (array[i].name == name) {
        return true;
    }
}
    return false;
};
 
 //Function to add or quit a pokemon
    $rootScope.caughtPokemon = function(pokemon){
      if($rootScope.pokemonIsCaught($rootScope.caught, pokemon.name)){
        var index= $rootScope.caught.indexOf(pokemon);
           $rootScope.caught.splice(index, 1);
      }else{
       $rootScope.caught.push(pokemon);
      }
    };

//Change the sorting order of pokemon
    $scope.sort = function(){
    vm.pokemons.reverse(
      function(a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
});
};
      pokemon.all()
    .then(function(data){
      
    vm.pokemons=data.data;
     
    // vm.pokemons.forEach(function(item){
     
    //  item.name=capitalizeFirstLetter(item.name);
 
    // });
   });

   

  });
