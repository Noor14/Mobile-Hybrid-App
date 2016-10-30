

(function () {
  angular.module('psqca')
    .controller('downloadsController', downloadCtrl);
  downloadCtrl.$inject = ['$scope', '$state' ,'$timeout','$cordovaFileTransfer','$ionicPopup', '$ionicHistory','$ionicLoading'];

  function downloadCtrl($scope, $state, $timeout, $cordovaFileTransfer, $ionicPopup, $ionicHistory,$ionicLoading) {

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

    $scope.logout = function () {
      $state.go("welcome");
      $ionicHistory.clearHistory();


    };

    $scope.itemsn = [
      {name: 'Application form for Certification Marks Licence',
        url: 'http://pakalerts.net/file/feedback.doc'
      },
      {
        name: 'Application for grant of licence ',
        url: 'http://www.psqca.com.pk/downloads//Download 3-2011/Form I.pdf'
      },
      {
        name: 'Self evaluation-cum-declaration for licence',
        url: 'http://www.psqca.com.pk/downloads/Download 3-2011/Form II.pdf'
      },
      {
        name: 'Application for renewal of licence',
        url: 'http://www.psqca.com.pk/downloads/Download 3-2011/Form IV.pdf'
      },
      {
        name: 'SROs and Gazette Notifications',
        url: 'http://www.psqca.com.pk/downloads/PSQCA-SRO.pdf'
      },
      {
        name: 'Application Form for Registration of Inspection Agency',
        url: 'http://www.psqca.com.pk/downloads/PSQCA-App-form-inspec-agencies.pdf'
      },
      {
        name: 'Documents Required',
        url: 'http://www.psqca.com.pk/downloads/test2/Download/2016/June/Import export/DOCUMENTS_REQUIRED.doc'
      },
      {
        name: 'Complete Information of Consignee',
        url: 'http://www.psqca.com.pk/downloads/test2/Download/2016/June/Import export/complete_information_of_consignee.doc'
      }


    ];
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


