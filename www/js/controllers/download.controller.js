

(function () {
  angular.module('psqca')
    .controller('downloadsController', downloadCtrl);
  downloadCtrl.$inject = ['$scope', '$state' ,'$timeout','$cordovaFileTransfer','$ionicPopup', '$ionicHistory','$ionicLoading','$http'];

  function downloadCtrl($scope, $state, $timeout, $cordovaFileTransfer, $ionicPopup, $ionicHistory,$ionicLoading,$http) {

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

    $scope.logout = function () {
      $state.go("welcome");
      $ionicHistory.clearHistory();


    };
    $http.get('http://pakalerts.net/mail/downloadurl.php')
      .then(function success(succ){
          $scope.itemsn = succ.data;
          console.log(succ.data,"Success");
        },
        function error(err){

          console.log(err,"Error");

        });

  $scope.success = function() {
      $ionicPopup.show({
        template: '<p> File Download Successfully In Phone Storage PSQCA Folder </p>',
        title: 'Download',
        buttons: [
          {text: 'OK',
            type: 'button-positive'
          }
        ]
      });
    };

    $scope.downloadFile = function (id) {
      var url = encodeURI($scope.itemsn[id].url);
      var filename = url.split("/").pop();
      //var targetPath = cordova.file.externalDataDirectory + filename;
      var targetPath = "///storage/emulated/0/PSQCA/" + filename;

      var trustHosts = true;
      var options = {};

      $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
        .then(function (result) {
          // Success!
          $ionicLoading.hide();
          $scope.success();
          //alert("File Download Successfully In Phone Storage PSQCA Folder");
          console.log("download Success",result)
        }, function (err) {
          // Error
          alert("File Not Found");
          console.log("download error",err)

        }, function (progress) {
          $ionicLoading.show({template: '<ion-spinner icon="spiral"></ion-spinner>'});
          console.log("download progress",progress);

          $timeout(function () {
            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
          });
        });

    };
  }


})();


