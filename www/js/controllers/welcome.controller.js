(function () {
  angular.module('psqca')
    .controller('WelcomeController', welcomeCtrl);
  welcomeCtrl.$inject = ['$rootScope','$scope', '$state','$interval'];

  function welcomeCtrl($rootScope ,$scope, $state ,$interval) {

    $scope.progress = 0;
    var stop;
    $scope.callAtInterval = function() {
      console.log("$scope.callAtInterval - Interval occurred"+$scope.progress);
      $scope.progress += 1;
      if($scope.progress > 100){
        $state.go('welcome');
        $rootScope.notFirstTime = true;
      }
    };

    if(!$rootScope.notFirstTime) {
      stop = $interval($scope.callAtInterval, 30 , 130);
    }

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
