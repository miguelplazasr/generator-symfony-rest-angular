/**
 * Created by miguelplazas on 30/04/16.
 */


"use strict";

var app = angular.module('app',
    [
        'ui.bootstrap',
        'ui.router',
        'ui.navbar',
        'ngCookies',
        'restangular'
    ]);


app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
});

/**
 * Route configuration for the RDash module.
 */
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'tpl/default/index.html.twig',
                controller: 'MasterCtrl'
            })

            .state('tables', {
                url: '/tables',
                template: '<h2>table</h2>'
            })

            /*
            .state('categories', {
                url: '/categories',
                templateUrl: './categories',
                controller: 'CategoryCtrl'
            })
            */
        ;
    }
]);