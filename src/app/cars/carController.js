var angular = require('angular');

var carsModule = require('./index');

var controller = function(carService, $state, $stateParams){

	this.car = carService.getCar($stateParams.id);	
};

module.exports = controller;

angular
  .module(carsModule)
  .controller('carController', controller);