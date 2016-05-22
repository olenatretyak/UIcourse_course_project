(function () {
    "use strict";

    angular.module('lits.kia-testdrive-app')
      .controller('MainPageController', MainPageController);

     function MainPageController($scope, KiaCarsDataService) {
       $scope.dataCars = KiaCarsDataService.getCars ()
     } 

})();
