var angular = require('angular');

var carsModule = require('./index');

var service = function(){
	this.cars = {};

	this.getCars = function(){
		this.cars = require('./cars.json');
		return this.cars;
	};
};

module.exports = service;

angular
  .module(carsModule)
  .service('carService', service);