(function () {
  angular.module('psqca')
    .controller('ProductsController', productsCtrl);
  productsCtrl.$inject = ['$scope', '$state','$http' , '$ionicHistory'];

  function productsCtrl($scope, $state, $http , $ionicHistory) {
    $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };
    $scope.item = {
      select : $scope.select
    };
    $http.get('js/data.json').success(function(response){

      $scope.data = response;

    });
    $scope.searchData=[];
    $scope.selecttion={option:""};
    $scope.notFound=false;

    $scope.search = function(){
      $scope.notFound=true;

      $scope.searchData=[];
      for (var i = 0; i < $scope.data.length; i++) {
        var product = $scope.data[i].Product.toLowerCase();
        var licenseNo = $scope.data[i].LicenseNo.toLowerCase();
        var unitName = $scope.data[i].UnitName.toLowerCase();
        var brand = $scope.data[i].Brand.toLowerCase();


        var pro = product.indexOf($scope.item.select.toLowerCase());
        var lis = licenseNo.indexOf($scope.item.select.toLowerCase());
        var name = unitName.indexOf($scope.item.select.toLowerCase());
        var br = brand.indexOf($scope.item.select.toLowerCase());

///<<<<<<< HEAD
        var Productfound = P.indexOf($scope.item.select.toLowerCase());
        var LicenseNofound = L.indexOf($scope.item.select.toLowerCase());
        var UnitNamefound = U.indexOf($scope.item.select.toLowerCase());
        var Brandfound = B.indexOf($scope.item.select.toLowerCase());
        console.log(Object.$$values($scope.data[i]));

        //if (($scope.data[i].Product == $scope.item.select) || ($scope.data[i].LicenseNo == $scope.item.select) || ($scope.data[i].UnitName == $scope.item.select) || ($scope.data[i].Brand == $scope.item.select)) {
     //MyChanges   // if ((Productfound >= 0) || (LicenseNofound >= 0) || (UnitNamefound >= 0) || (Brandfound >= 0)) {

          //$scope.items.push($scope.data[i]);
//=======

        if ((pro >= 0) || (lis >= 0) || (name >= 0) || (br >= 0)) {
// >>>>>>> 667130534ea212b3a47309b0ceaab092d4d88d5c
//
          $scope.searchData.push($scope.data[i]);
          console.log("nn",$scope.searchData.length);
          $scope.matchData='';
          $scope.notFound=false;
        }

        else {
          $scope.matchData='';
          console.log("ggg",$scope.notFound);
        }

      }
    };


    $scope.match = function(obj){
      $scope.searchData.length="";
      for (var j=0; j < $scope.data.length; j++ ){
        var licenseNo = $scope.data[j].LicenseNo;

        if(licenseNo==obj){

          $scope.matchData=$scope.data[j];
          console.log($scope.matchData,"hi hello");

        }




      }


    };








  }
})();
