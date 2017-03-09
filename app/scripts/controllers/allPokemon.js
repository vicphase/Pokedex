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

      //Filter pokemon by name
    $scope.query = {};
    $scope.name = 'name';
    $rootScope.message=" ";

    //Array of caught pokemon
    if($rootScope.caught === null || $rootScope.caught === undefined){
    $rootScope.caught = [];
    }
    
    //Function to know if a pokemon is captured
   $rootScope.pokemonIsCaught= function(name){
    for(var i = 0; i < $rootScope.caught.length; i++) {
    if ($rootScope.caught[i].name === name) {
        return true;
    }
}
    return false;
};
 
 //Function to add or quit a pokemon to the caught array
    $rootScope.caughtPokemon = function(pokemon){
        //Remove pokemon
      if($rootScope.pokemonIsCaught(pokemon.name)){
          //If pokemon is in battle box
          if($rootScope.pokemonIsBattle(pokemon.name)){
              //Message
               $rootScope.message= "You cannot un-catch Pokémon that are in your battle box";
                $('#messageModal').modal('show');
          }else{
        var index= $rootScope.caught.indexOf(pokemon);
           $rootScope.caught.splice(index, 1);
          }

      }else{
          //Add pokemon
       $rootScope.caught.push(pokemon);
      }
    };

    //Array of caught pokemon
    if($rootScope.battle === null || $rootScope.battle === undefined){
    $rootScope.battle = [];
    }
    
    //Function to know if a pokemon is captured
   $rootScope.pokemonIsBattle= function(name){
    for(var i = 0; i < $rootScope.battle.length; i++) {
    if ($rootScope.battle[i].name === name) {
        return true;
    }
}
    return false;
};
 
 //Function to add or quit a pokemon to the caught array
    $rootScope.battlePokemon = function(pokemon){
        //Remove a pokemon 
      if($rootScope.pokemonIsBattle(pokemon.name)){
        var index= $rootScope.battle.indexOf(pokemon);
           $rootScope.battle.splice(index, 1);
      }else{
          //Add a pokemon
          if($rootScope.pokemonIsCaught(pokemon.name)){
                $rootScope.battle.push(pokemon);
          }else{
           $rootScope.message= "You haven’t captured this Pokémon yet";
           $('#messageModal').modal('show');  
          }
      
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
