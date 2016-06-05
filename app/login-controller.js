(function () {
  
    angular.module('lits.kia-testdrive-app')
      .controller('LoginController', LoginController);

    function LoginController($scope, $location) {
      $scope.login = function () {
        if ($scope.email == "1111@gmail.com" && $scope.password == "1111") {
          window.isLoggedIn = true;
          $location.path( "/"); //-? 
          console.log('correct')
        } else {
          console.log('wrong')
          $scope.showErrors = true;
          
        }
      }

    }  



})();