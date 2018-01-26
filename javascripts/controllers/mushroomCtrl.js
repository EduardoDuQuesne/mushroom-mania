/*jshint esversion: 6 */

angular.module("mushroomApp").controller("MushroomCtrl", function($scope, MushroomFactory) {
    MushroomFactory.getMushrooms()
    .then((mushroomData) => {
        let mushroomArray = [];
        let fbKeys = Object.keys(mushroomData);
        fbKeys.forEach(key => {
            mushroomArray.push(mushroomData[key]);
        });
        $scope.mushroomList = mushroomArray;
        console.log('Mushroom List: ', mushroomArray);
    });
});