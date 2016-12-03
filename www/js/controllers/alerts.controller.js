(function () {
  angular.module('psqca')
    .controller('AlertsController', alertsCtrl);
  alertsCtrl.$inject = ['$scope', '$state' , '$ionicHistory','$http'];

  function alertsCtrl($scope, $state ,$ionicHistory, $http) {
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };

    $scope.logout = function(){
      $state.go("welcome");
      $ionicHistory.clearHistory();


    };

    $http.get('http://pakalerts.net/mail/newsitem.php')
      .then(function success(succ){
          $scope.newsitem = succ.data;
          console.log(succ.data,"Success");
        },
        function error(err){

          console.log(err,"Error");

        });


  }
})();
