var angular = require('angular');
var title = require('./title');

var homeModule = 'home';

module.exports = homeModule;

angular
  .module(homeModule, [])
  .component('myTitle', title);
  //.component('fountainTech', tech)
  //.component('fountainTechs', techs);
