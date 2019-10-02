(function (){
    'use strict';

    angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
        $scope.message = "";
        $scope.menu = "";
        $scope.checkLunch = function () {
            var items = $scope.menu.split(",");
            
            if ($scope.menu.length === 0) {
                $scope.message = "Please enter data first."
            }
            else if (items.length <= 3 && items.length > 0) {
                $scope.message = "Enjoy!";
            }
            else {
                $scope.message = "Too much!";
            }
        };
    }
})();