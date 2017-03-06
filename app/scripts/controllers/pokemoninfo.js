'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:PokemoninfoCtrl
 * @description
 * # PokemoninfoCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('PokemoninfoCtrl', function ($http, $routeParams) {
   var vm=this;
   
     //Get Pokemon information
  $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/'+$routeParams.id})
  .then(function(data){
     vm.pokemon = data.data;

     //Format data to be shown
     //Pokemon name
     vm.pokemon.name=capitalizeFirstLetter(vm.pokemon.name);
     //Pokemon height and width
     vm.pokemon.height/=10;
     vm.pokemon.weight/=10;
    //Pokemon types
      vm.pokemon.types.forEach(function(item){
      item.type.name=capitalizeFirstLetter(item.type.name);
      }); 
     //Hidden ability
     var string=capitalizeFirstLetter(vm.pokemon.abilities[0].ability.name);   
     vm.pokemon.abilities[0].ability.name=string.replace(/-/g, " ");



         //Get pokemon species
    $http({method: 'GET', url: vm.pokemon.species.url})
  .then(function(data){ 
    vm.species=data.data;
      //  vm.species.flavor_text_entries[1].flavor_text=vm.species.flavor_text_entries[1].flavor_text.substring(0,vm.species.flavor_text_entries[1].flavor_text.indexOf('.')); 
      //Habitat
     string=capitalizeFirstLetter(vm.species.habitat.name);   
     vm.species.habitat.name=string.replace(/-/g, " ");

         //Get pokemon evolution chain
    $http({method: 'GET', url: vm.species.evolution_chain.url})
  .then(function(data){ 

   var evoData = data.data.chain;

     var evoChain = [];

     do {
  var evoDetails = evoData['evolution_details'][0];

  evoChain.push({
    "species_name": evoData.species.name,
    "min_level": !evoDetails ? 1 : evoDetails.min_level,
    "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
    "item": !evoDetails ? null : evoDetails.item
  });

  evoData = evoData['evolves_to'][0];
 } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
var evolutionInfo=[];
//Get more information about each evolution
evoChain.forEach(function (item) {
      //Get pokemon evolution chain
    $http({method: 'GET', url: 'http://pokeapi.co/api/v2/pokemon/'+item.species_name})
  .then(function(data){
    var pokemon = data.data;
    //Evolution name
    pokemon.name = capitalizeFirstLetter(pokemon.name);
        //Evolution types
      pokemon.types.forEach(function(item){
      item.type.name=capitalizeFirstLetter(item.type.name);
    }); 
    evolutionInfo.push(pokemon);


   });
   
  });
      //Sort evolutions
    evolutionInfo.sort(function(a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
});
      //Sort evolutions
    evolutionInfo.sort(function(a, b) {
    return parseFloat(a.order) - parseFloat(b.order);
});

console.log(evolutionInfo);
    vm.evolution_details=evolutionInfo;

   });
   });



  });

  });
