(function () {
  angular.module('psqca')
    .controller('WelcomeController', welcomeCtrl);
  welcomeCtrl.$inject = ['$scope', '$state'];

  function welcomeCtrl($scope, $state) {
    $scope.fields = ['Full Name', 'E-mail', 'Password','Phone Number', 'Company']
  }
})();
