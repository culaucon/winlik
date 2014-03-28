var WinLikApp = angular.module('WinLikApp', ['ngRoute']);

WinLikApp.controller("navController", ['$scope', function($scope) {
    $scope.loggedUserData = WinLik.getWinLikItem('users', WinLik.userLogged);
}]);

WinLikApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/feed.html',
            controller: 'feedControllers'
        })
        .when('/user/:userID', {
            templateUrl: '/partials/user.html',
            controller: 'userControllers'
        })
        .when('/team/:teamID', {
            templateUrl: '/partials/team.html',
            controller: 'teamControllers'
        });
}]);
