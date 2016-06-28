// var angular = require('angular');
require('angular-mocks');
// require('../../../index');
var mockCarService, mockCarServiceModule = require('./carService.spec');
var $controller, $rootScope;


describe('carListController test suite, ', function () {
  beforeEach(angular.mock.module('cars'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    mockCarService = mockCarServiceModule(_$q_, _$rootScope_);
  }));


  it('should have cars loaded', function () {

    var ctrl = $controller('carListController', {
      "carService": mockCarService,
      "$state": {}
    });

    expect(ctrl.loaded).toBe(false);
    expect(ctrl.cars).toBe(undefined);

    $rootScope.$digest();
    
    expect(ctrl.loaded).toBe(true);
    expect(ctrl.cars).not.toBe(undefined);
    
  });

});