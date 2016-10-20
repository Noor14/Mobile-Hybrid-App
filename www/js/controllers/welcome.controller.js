(function () {
  angular.module('psqca')
    .controller('WelcomeController', welcomeCtrl);
  welcomeCtrl.$inject = ['$scope', '$state'];

  function welcomeCtrl($scope, $state) {

    $scope.isLoaded = 'false';
    //
    // if($scope.route == 'welcome'){
    //
    // }

    $scope.loadingBoxes = [1,2,3,4,5,6,7];


    $scope.loginPage = function(){
      $state.go('login');
    };
    $scope.subscribe = function(){
      $state.go('subscription');
    };
  }
})();
