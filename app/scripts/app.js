'use strict';

/**
 * @ngdoc overview
 * @name pokedexApp
 * @description
 * # pokedexApp
 *
 * Main module of the application.
 */
angular
  .module('pokedexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/allPokemon.html',
        controller: 'AllPokemonCtrl',
        controllerAs: 'allPokemon'
      })
      .when('/allPokemon', {
        templateUrl: 'views/allPokemon.html',
        controller: 'AllPokemonCtrl',
        controllerAs: 'allPokemon'
      })
      .when('/caught', {
        templateUrl: 'views/caught.html',
        controller: 'CaughtCtrl',
        controllerAs: 'caught'
      })
      .when('/battle', {
        templateUrl: 'views/battle.html',
        controller: 'BattleCtrl',
        controllerAs: 'battle'
      })
      .when('/pokemonInfo/:id', {
        templateUrl: 'views/pokemoninfo.html',
        controller: 'PokemoninfoCtrl',
        controllerAs: 'pokemonInfo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
