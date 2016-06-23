var angular = require('angular');

var carsModule = 'cars';

module.exports = carsModule;

angular
  .module(carsModule, []);


require('./carService');

require('./carListController');
require('./carController');
require('./carFormController');
