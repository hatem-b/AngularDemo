var angular = require('angular');
require('angular-mocks');
var footer = require('./footer.js');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('myFooter', ['app/home/footer.html'])
      .component('myFooter', footer);
    angular.mock.module('myFooter');
  });

  it('should render \'Build with ♥ using yeoman\'', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<my-footer></my-footer>')($rootScope);
    $rootScope.$digest();
    var footer = element.find('div');
    expect(footer.html().trim()).toEqual('Build with ♥ using yeoman');
  }));
});
