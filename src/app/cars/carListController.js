var angular = require('angular');

var carsModule = require('./index');

var controller = function (carService, $state) {
	var self = this;
	self.loaded = false;

	carService.getCars()
		.then(function (reponse) {
			self.cars = reponse.data;
			self.loaded = true;
		});

	self.go = function (subState) {
		$state.go('cars.list' + subState);
	};
};



module.exports = controller;

angular
	.module(carsModule)
	.controller('carListController', controller);