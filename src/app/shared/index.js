var angular = require('angular');

var sharedModule = 'shared';

module.exports = sharedModule;

angular
	.module(sharedModule, []);

require('./directives');