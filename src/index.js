var angular = require('angular');
//var m = require('materialize');
var m2 = require('materialize-css');


var homeModule = require('./app/home/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var footer = require('./app/footer');

require('./styles/index.less');

angular
  .module('app', [homeModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('myHeader', header)
  .component('myFooter', footer);



