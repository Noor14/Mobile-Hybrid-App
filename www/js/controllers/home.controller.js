(function () {
  angular.module('psqca')
    .controller('HomeController', homeCtrl);
  homeCtrl.$inject = ['$scope', '$state','$cordovaBarcodeScanner'];

  function homeCtrl($scope, $state, $cordovaBarcodeScanner) {


    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };

  }
})();
