angular.module("simpleCrudApp", ["ngRoute", "users"])
    .controller("mainController", MainController)
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when("/users", {
            templateUrl: "/assets/html/users/mainUsers.html",
            controller: "userController"
        });

        $routeProvider.when("/users/create", {
            templateUrl: "/assets/html/users/addUser.html",
            controller: "createUserController"
        });

        $routeProvider.when("/products", {
            templateUrl: "/assets/html/products/mainProducts.html",
            controller: "mainController"
        });

        $routeProvider.otherwise({
            templateUrl: "/assets/html/general.html",
            controller: "mainController"
        });

        $locationProvider.html5Mode({
          enabled: false,
          requireBase: false
        });
    });

function MainController($scope) {

}
