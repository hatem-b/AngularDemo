var angular = require('angular');

var carsModule = require('./index');

var controller = function(carService, $state, $stateParams){
	var self = this;
	self.loaded = false;
	self.car = {};

	if ($stateParams.id)
		carService.getCar($stateParams.id)
		.then(function(reponse){
				self.car = reponse.data;
				self.loaded = true;
			});

	self.save = function(){
		if (!$stateParams.id){
			carService.create(self.car)
			.then(function(){
				$state.go("cars.list.cards");
			});
		} else {
			carService.update(self.car)
			.then(function(){
				$state.go("cars.list.cards");
			});
		}	
	};
};

module.exports = controller;

angular
  .module(carsModule)
  .controller('carFormController', controller);