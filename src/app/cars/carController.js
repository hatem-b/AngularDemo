var angular = require('angular');

var carsModule = require('./index');

var controller = function(carService, $state, $stateParams){
	var self = this;
	self.loaded = false;

	carService.getCar($stateParams.id)
		.then(function(reponse){
			self.car = reponse.data;
			self.loaded = true;
		});	

	self.delete = function(){
		console.log('del', self.car.id);

		carService.delete(self.car.id)
		.then(function(){
			$state.go("cars.list.cards");
		});
	};


	self.aa = function(){
		console.log("aa");
	};
};

module.exports = controller;

angular
  .module(carsModule)
  .controller('carController', controller);