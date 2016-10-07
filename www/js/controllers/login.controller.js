(function () {
  angular.module('psqca')
    .controller('LoginController', loginCtrl);
  loginCtrl.$inject = ['$scope', '$state','Auth','$ionicPopup'];

  function loginCtrl($scope, $state, Auth, $ionicPopup) {
    $scope.showPopup = function() {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="email" ng-model="data.email" placeholder="Enter email">',
        title: 'Enter Your email Address',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Send</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.email) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.email;
              }
            }
          }
        ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });

    };
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
