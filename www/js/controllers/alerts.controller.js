(function () {
  angular.module('psqca')
    .controller('AlertsController', alertsCtrl);
  alertsCtrl.$inject = ['$scope', '$state' , '$ionicHistory'];

  function alertsCtrl($scope, $state ,$ionicHistory) {
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

    $scope.logout = function(){
      $ionicHistory.clearHistory();
      $state.go("welcome");


    };
  }
})();
