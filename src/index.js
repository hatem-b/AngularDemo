// js libs
var angular = require('angular');

window.jQuery = window.$ = require('materialize-css/node_modules/jquery/dist/jquery');
//window.$.velocity = require('velocity-animate/velocity.js');
require('materialize-css/dist/js/materialize');


require('angular-ui-router');

// styles
require('./styles/index.less');


var homeModule = require('./app/home/index');
var carsModule = require('./app/cars/index');
var sharedModule = require('./app/shared/index');

var routesConfig = require('./routes');

var main = require('./app/home/main');

angular
    .module('app', [homeModule, carsModule, sharedModule, 'ui.router'])
    .config(routesConfig)
    .component('app', main);