var mockCarService = {};
var $q, $rootScope;

mockCarService.data = [{
  id: 1,
  name: 'Audi'
}, {
  id: 2,
  name: 'BMW'
}, {
  id: 3,
  name: 'Porsche'
}];

mockCarService.getCars = function () {
  var defer = $q.defer();

  defer.resolve({
    data: this.data
  });

  return defer.promise;
};

mockCarService.getCar = function (id) {
  var defer = $q.defer();

  defer.resolve({
    data: this.data[0]
  });

  return defer.promise;
};

mockCarService.create = function (car) {
  var defer = $q.defer();

  var id = this.data.length;

  var item = {
    id: id,
    name: car.manufacturer
  };

  this.data.push(item);
  defer.resolve(item);

  return defer.promise;
};

module.exports = function (_$q, _$rootScope) {
  $q = _$q;
  $rootScope = _$rootScope;
  return mockCarService;
};