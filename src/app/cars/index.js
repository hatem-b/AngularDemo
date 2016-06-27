var angular = require('angular');

var carsModule = 'cars';

module.exports = carsModule;

angular
	.module(carsModule, []);

//services
require('./carService');

// controllers
require('./carListController');
require('./carController');
require('./carFormController');
