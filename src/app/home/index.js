var angular = require('angular');
var title = require('./title');

var homeModule = 'home';

module.exports = homeModule;

var header = require('./header');
var footer = require('./footer');

angular
    .module(homeModule, [])
    .component('myTitle', title)
    .component('myHeader', header)
    .component('myFooter', footer);
