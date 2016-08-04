
var angFormApp = angular.module('angFormApp', ['ngRoute']);
angFormApp.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/view1/login.html',
      controller: 'MainCtrl'
    })
    .when('/view2', {
      templateUrl: '/view2/admin_panel.html',
      controller: 'MainCtrl'
    })
    .when('/view3', {
      templateUrl: '/view3/create_quiz.html',
      controller: 'MainCtrl'
    })
    .when('/newUser', {
      templateUrl: '/newUser/new_user.html',
      controller: 'MainCtrl'
    });
});
