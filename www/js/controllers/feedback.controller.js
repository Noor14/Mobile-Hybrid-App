(function () {   angular.module('psqca')
  .controller('feedBackController', loginCtrl);
  loginCtrl.$inject = ['$scope', '$state' , '$ionicHistory'];

  function loginCtrl($scope, $state , $ionicHistory)
  {

      $scope.myGoBack = function() {
        $ionicHistory.goBack();
      };

    $scope.fields = ['Full Name', 'E-mail','Phone Number', 'Organization']


  }

})();
