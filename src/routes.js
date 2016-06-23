module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  
  $urlRouterProvider
     .otherwise('/')
     .when('/cars', '/cars/list')
     .when('/cars/list', '/cars/list/cards');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main.html'
    })
    .state('cars', {
      url: "/cars",
      abstract: true,
      templateUrl: "app/cars/index.html"
    })
    .state('cars.list', {
      url: "/list",
      abstract: true,
      templateUrl: "app/cars/carList.html",
      
    })
    .state('cars.list.table', {
      url: "/table",
      templateUrl: "app/cars/carList.table.html",
      
    })
    .state('cars.list.cards', {
      url: "/cards",
      templateUrl: "app/cars/carList.cards.html",
      
    })
    .state('cars.add', {
      url: "/add",
      templateUrl: "app/cars/carForm.html",
      
    })
    .state('cars.view', {
      url: "/:id",
      templateUrl: "app/cars/car.html",
      
    })
    .state('cars.edit', {
      url: "/edit/:id",
      templateUrl: "app/cars/carForm.html",
      
    });

}
