(function () {
  angular.module('psqca')
    .controller('LoginController', loginCtrl);
  loginCtrl.$inject = ['$scope', '$state'];

  function loginCtrl($scope, $state) {
    $scope.fields = ['E-mail', 'Password']
  }
})();
