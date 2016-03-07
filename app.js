'use strict';

var app = angular.module('app', ['ngRoute',
                                'MegaCtrl',
                                'ClockDirect']);

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
                controller : 'Ctrl2',
                templateUrl : 'view2/view2.html'

            }).
            when('/view3/', {
              controller : 'Ctrl3',
              templateUrl : '/view3/view3.html'
            });

    }]);
