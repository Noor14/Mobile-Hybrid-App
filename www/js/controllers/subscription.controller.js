(function () {
  angular.module('psqca')
    .controller('SubscriptionController', subscriptionCtrl);
  subscriptionCtrl.$inject = ['$scope', '$state','User'];

  function subscriptionCtrl($scope, $state,User) {

    $scope.subscribe = function(user){
      console.log('user ', user);
      User.subscribe(user).then(function(success){
        console.log('success ', success);
      },function(error){
        console.log('error',error);
      })
    };

    /*$scope.user = {

    };


      User.subscribe(user).then(function(success){

      },function(error){

      })*/
  }
})();
