(function () {
  angular.module('psqca')
    .controller('HomeController', homeCtrl);
  homeCtrl.$inject = ['$scope', '$state', '$ionicPlatform' , '$ionicHistory','$cordovaBarcodeScanner'];

  function homeCtrl($scope, $state , $ionicPlatform , $ionicHistory, $cordovaBarcodeScanner) {
    console.log($state.current.name,"kfkf");
    $ionicPlatform.onHardwareBackButton(function(){
      if($state.current.name=="home"){

        ionic.Platform.exitApp();
      }

    });


    $scope.logout = function(){
      $state.go("welcome");
      $ionicHistory.clearHistory();


    };
// OR with IONIC
    $scope.scanBarcode = function() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          if(!result.cancelled)
          {
            alert("Barcode type is: " + result.format);
            alert("Decoded text is: " + result.text);
          }
          else
          {
            alert("You have cancelled scan");
          }
        },
        function (error) {
          alert("Scanning failed: " + error);
        }
      );


    };



  }
})();
