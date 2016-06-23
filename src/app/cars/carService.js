var angular = require('angular');

var carsModule = require('./index');

var service = function(){
	this.cars = {};

	this.getCars = function(){
		this.cars = require('./cars.json');
		return this.cars;
	};

	this.getCar = function(id){
		this.cars = require('./cars.json');
		
		return this.cars.filter(function(car){
			return car.id == id;
		})[0];
	};
};

module.exports = service;

angular
  .module(carsModule)
  .service('carService', service);