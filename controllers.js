var controllers = angular.module('controllers', []);

controllers.controller('Page1', ['$scope',
    function ($scope) {
        $scope.text = 'This is page 1';
    }
]);

controllers.controller('Page2', ['$scope',
    function($scope) {
        $scope.text = 'This is page 2';
    }
]);

controllers.controller('HeaderFooter', ['$scope', '$route',
    function($scope, $route) {
        $scope.$route = $route;
    }
]);
