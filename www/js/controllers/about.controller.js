(function () {
  angular.module('psqca')
  .controller('aboutController', aboutCtrl);
  aboutCtrl.$inject = ['$scope', '$state' , '$ionicHistory'];

  function aboutCtrl($scope, $state,$ionicHistory)
  {
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

    $scope.logout = function(){
      $ionicHistory.clearHistory();
      $state.go("welcome");


    };

  }

})();
