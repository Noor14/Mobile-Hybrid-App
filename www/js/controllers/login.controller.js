(function () {
  angular.module('psqca')
    .controller('LoginController', loginCtrl);
  loginCtrl.$inject = ['$scope', '$state','Auth'];

  function loginCtrl($scope, $state, Auth) {

    $scope.user = {};
    $scope.login = function(){

      Auth.login($scope.user).then(function(response){
        $scope.user = {};
        if(response.token){
          $state.go('home');
        }
      },function(error){
        console.log(error);
      })

    }

  }
})();
