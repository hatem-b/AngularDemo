var angular = require('angular');

var carsModule = require('./index');


var BASE_URL = "http://localhost:3002/cars/";

var service = function($http){
	var self = this;

	self.cars = {};

	self.getCars = function(){
		return $http.get(BASE_URL);
	};

	self.getCar = function(id){
		return $http.get(BASE_URL + id);
	};

	self.create = function(car){
		return $http.post(BASE_URL, {
			data : car
		});
	};

	self.update = function(car){
		return $http.put(BASE_URL, {
			data : car
		});
	};

	self.delete = function(id){
		return $http.delete(BASE_URL + id);
	};
};

module.exports = service;

angular
  .module(carsModule)
  .service('carService', service);