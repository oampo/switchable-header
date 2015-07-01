var app = angular.module('switchableHeader', [
  'ngRoute',
  'controllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/page1', {
                templateUrl: 'partials/page.html',
                controller: 'Page1'
            })
            .when('/page2', {
                templateUrl: 'partials/page.html',
                controller: 'Page2'
            });
    }
]);
