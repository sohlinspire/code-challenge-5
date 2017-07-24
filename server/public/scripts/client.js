var app = angular.module('myApp', ['ngRoute']);
console.log('js sourced');

app.config(function($routeProvider) {

  $routeProvider

    .when('/message', {
      controller: 'MessageController',
      controllerAs: 'mc',
      templateUrl: 'views/templates/message.html'
    })

    .otherwise({
      redirectTo: '/home'
    });
});
