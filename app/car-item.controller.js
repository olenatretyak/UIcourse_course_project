(function () {
    
    angular.module('lits.kia-testdrive-app')
      .controller('CarItemController', CarItemController);

    function CarItemController($scope, $routeParams, KiaCarsDataService) {
      $scope.car = KiaCarsDataService
        .getCars() // [{}, {}]
        .filter( function(element) {return element.id == $routeParams.id} ) [0]// [{}]
        // {}

      $scope.currentImg = $scope.car.sliderImages[0];
      $scope.setSlide = function(slide) {
        $scope.currentImg = slide;
      }

      $scope.testDrives = KiaCarsDataService.getTestDrives($routeParams.id);

      $scope.averageCity = function() {
        var sumCity = $scope.testDrives.map(function(testDrive) { return testDrive.city; })
                            .reduce(function(a, b){ return a+b })
        return sumCity / $scope.testDrives.length;
      }

      $scope.addTestDrive = function() {
        var data = {
          carId:    $routeParams.id,
          name:     $scope.name,
          city:     parseFloat($scope.city),
          highway:  parseFloat($scope.highway),
          combined: parseFloat($scope.combined),
        }
        $scope.testDrives.push(data);
        KiaCarsDataService.addTestDrive(data);
      }

      $scope.showForm = window.isLoggedIn;
    }  


})();