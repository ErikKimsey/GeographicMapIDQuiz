'use strict';

var app = angular.module('app', ['ngRoute',
                                'MegaCtrl']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl : '/view1/view1.html',
                controller: 'Ctrl1'
            }).
            // when('/view1/', {
            //     controller : 'Ctrl1',
            //     templateUrl : 'view1/view1.html'
            //
            // }).
            when('/instrview/', {
              templateUrl : '/instrView/instrview.html',
              controller : 'InstrCtrl'
            }).
            when('/view2/', {
              templateUrl : 'view2/view2.html',
                controller : 'Ctrl2'
            }).
            when('/view3/', {
              templateUrl : '/view3/view3.html',
              controller : 'Ctrl3'
            });

    }]);
