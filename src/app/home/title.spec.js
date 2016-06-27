var angular = require('angular');
require('angular-mocks');
var title = require('./title');

describe('title component', function () {
    beforeEach(function () {
        angular
            .module('myTitle', ['app/home/title.html'])
            .component('myTitle', title);
        angular.mock.module('myTitle');
    });

    it('should render AngularCars', angular.mock.inject(function ($rootScope, $compile) {
        var element = $compile('<my-title></my-title>')($rootScope);
        $rootScope.$digest();
        var title = element.find('h1');
        expect(title.html().trim()).toEqual('AngularCars');
    }));
});
