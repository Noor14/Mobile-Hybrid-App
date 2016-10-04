(function () {   angular.module('psqca')
  .controller('feedBackController', loginCtrl);
  loginCtrl.$inject = ['$scope', '$state'];

  function loginCtrl($scope, $state)
  {

    $scope.fields = ['Full Name', 'E-mail','Phone Number', 'Organization']


  }

})();
