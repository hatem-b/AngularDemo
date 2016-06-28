var angular = require('angular');

var carsModule = require('./index');

var controller = function (carService, $state, $stateParams) {

	var self = this;
	self.loaded = false;

	carService.getCar($stateParams.id)
		.then(function (response) {
			self.car = response.data;
			self.loaded = true;
		});

	self.delete = function () {
		console.log('del', self.car.id);

		carService.delete(self.car.id)
			.then(function () {
				$state.go("cars.list.cards");
			});
	};

};

module.exports = controller;

angular
	.module(carsModule)
	.controller('carController', controller);