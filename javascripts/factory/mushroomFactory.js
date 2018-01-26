/*jshint esversion: 6 */

angular.module("mushroomApp").factory("MushroomFactory", function($q, $http) {
    let getMushrooms = () => {
        return $q ((resolve, reject) => {
            $http
            .get("https://mushroom-ma.firebaseio.com/mushrooms.json")
            .then((mushrooms) => {
                resolve(mushrooms.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    return { getMushrooms };
});