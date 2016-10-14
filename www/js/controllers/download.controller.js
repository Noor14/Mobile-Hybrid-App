

(function () {
  angular.module('psqca')
    .controller('downloadsController', downloadCtrl);
  downloadCtrl.$inject = ['$scope', '$state'];

  function downloadCtrl($scope, $state, $timeout, $cordovaFileTransfer)
  {
    $scope.itemsn = [
      {id:0, name: 'Application form for Certification Marks Licence' , url : 'http://www.psqca.com.pk/downloads/Download 3-2011/psqca Wall Paper.jpg' , file : 'wall_paper.jpg'},
      {id:1, name: 'Application for grant of licence ' , url : 'http://www.psqca.com.pk/downloads//Download 3-2011/Form I.pdf' , file : 'form1.pdf'},
      {id:2, name: 'Self evaluation-cum-declaration for licence' , url : 'http://www.psqca.com.pk/downloads/Download 3-2011/Form II.pdf' ,file : 'form2.pdf'},
      {id:3, name: 'Application for renewal of licence' , url : 'http://www.psqca.com.pk/downloads/Download 3-2011/Form IV.pdf' , file : 'form4.pdf'},
      {id:4, name: 'SROs and Gazette Notifications' , url : 'http://www.psqca.com.pk/downloads/PSQCA-SRO.pdf' , file : 'psqca_sqo.pdf'},
      {id:5, name: 'Application Form for Registration of Inspection Agency' , url : 'http://www.psqca.com.pk/downloads/PSQCA-App-form-inspec-agencies.pdf' , file : 'agencies.pdf'},
      {id:6, name: 'Documents Required' , url : 'http://www.psqca.com.pk/downloads/test2/Download/2016/June/Import export/DOCUMENTS_REQUIRED.doc' , file : 'required.doc'},
      {id:7, name: 'Complete Information of Consignee' , url : 'http://www.psqca.com.pk/downloads/test2/Download/2016/June/Import export/complete_information_of_consignee.doc' , file : 'consignee.doc'}


    ];

    $scope.downloadFile = function(id){

      document.addEventListener('deviceready', function () {

        var url = $scope.itemsn[id].url;
        var targetPath = cordova.file.documentsDirectory + $scope.itemsn[id].file;
        var trustHosts = true;
        var options = {};

        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
          .then(function(result) {
            // Success!
          }, function(err) {
            // Error
          }, function (progress) {
            $timeout(function () {
              $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            });
          });

      }, false);






    }


  }

})();


