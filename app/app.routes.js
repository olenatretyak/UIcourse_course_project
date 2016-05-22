(function () {
    "use strict";

    angular.module('lits.kia-testdrive-app')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'MainPageController'
            })
            .when('/car-items/:id', {
                templateUrl: 'car-item.html',
                controller: 'CarItemController'
            })
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'LoginController'
            })
            ;
    }
})();