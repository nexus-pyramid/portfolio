var app = angular.module("app", ['ngRoute']);
app.config( function ($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'assets/partials/main.html'
   })
  
  .otherwise({
    redirectTo: '/'
  });
    // $locationProvider.html5Mode(true);
});