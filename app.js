/*jshint esversion: 6 */

angular.module("mushroomApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/mushroom.html",
                controller: "MushroomCtrl"
            })
            .otherwise("/");
    });