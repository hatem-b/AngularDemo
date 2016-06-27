// var angular = require('angular');
require('angular-mocks');
// require('../../../index');
var mockCarService, mockCarServiceModule = require('./carService.spec');
var $controller, $rootScope;


describe('carController test suite, ', function () {
  beforeEach(angular.mock.module('cars'));

  beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    mockCarService = mockCarServiceModule(_$q_, _$rootScope_);
  }));



  it('should have a delete method', function () {
    var controller = $controller('carController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {
        id: 1
      }
    });
    //$rootScope.$digest();

    expect(controller.delete).not.toBe(undefined);
  });

  it('should have a car loaded', function () {

    var ctrl = $controller('carController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {
        id: 1
      }
    });

    expect(ctrl.loaded).toBe(false);
    expect(ctrl.car).toBe(undefined);

    $rootScope.$digest();
    
    expect(ctrl.loaded).toBe(true);
    expect(ctrl.car).not.toBe(undefined);
    
  });

});