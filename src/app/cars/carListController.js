var angular = require('angular');

var carsModule = require('./index');

var controller = function(carService, $state){

	this.cars = carService.getCars();

	this.go = function(subState){
		$state.go('cars.list' + subState);
	};
};



module.exports = controller;

angular
  .module(carsModule)
  .controller('carListController', controller);