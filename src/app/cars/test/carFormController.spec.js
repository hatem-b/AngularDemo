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



  it('should have a save method', function () {
    var controller = $controller('carFormController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {
        id: 1
      }
    });

    expect(controller.save).not.toBe(undefined);
  });

  it('should have a car loaded if an id is passed', function () {

    var ctrl = $controller('carFormController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {
        id: 1
      }
    });

    expect(ctrl.loaded).toBe(false);
    expect(ctrl.car).toEqual({});

    $rootScope.$digest();

    expect(ctrl.loaded).toBe(true);
    expect(ctrl.car).not.toBe(undefined);
    expect(ctrl.car).not.toEqual({});

  });

  it('should not have a car loaded if no id is passed', function () {

    var ctrl = $controller('carFormController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {}
    });

    $rootScope.$digest();

    expect(ctrl.loaded).toBe(false);
    expect(ctrl.car).toEqual({});
  });

  it('should add a new car', function () {

    var ctrl = $controller('carFormController', {
      "carService": mockCarService,
      "$state": {},
      "$stateParams": {}
    });

    $rootScope.$digest();


    var oldCount = mockCarService.data.length;

    expect(ctrl.loaded).toBe(false);
    expect(ctrl.car).toEqual({});

    ctrl.car = {
      id: oldCount + 1,
      name: "BMW"
    };
    ctrl.save();

    expect(mockCarService.data.length).toEqual(oldCount + 1);
  });

});