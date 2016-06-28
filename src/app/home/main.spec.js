var angular = require('angular');
require('angular-mocks');
var main = require('./main');

describe('main component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/home/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, main and footer', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('my-header').length).toEqual(1);
    expect(element.find('my-title').length).toEqual(1);
    expect(element.find('my-footer').length).toEqual(1);
  }));
});
