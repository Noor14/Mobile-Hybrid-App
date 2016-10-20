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

      //console.log(response);
    });

    $scope.selecttion={option:""};

    $scope.search = function(){
      console.log("data.length="+$scope.data.length);
      var isSearch = false;
      var index = 0;
      for (var i = 0; i < $scope.data.length; i++) {
        console.log($scope.data[i].LicenseNo + " ===== "+$scope.item.select);

        var P = $scope.data[i].Product.toLowerCase();
        var L = $scope.data[i].LicenseNo.toLowerCase();
        var U = $scope.data[i].UnitName.toLowerCase();
        var B = $scope.data[i].Brand.toLowerCase();
        $scope.items = [];


        var Productfound = P.indexOf($scope.item.select.toLowerCase());
        var LicenseNofound = L.indexOf($scope.item.select.toLowerCase());
        var UnitNamefound = U.indexOf($scope.item.select.toLowerCase());
        var Brandfound = B.indexOf($scope.item.select.toLowerCase());
        console.log(Object.$$values($scope.data[i]));

        //if (($scope.data[i].Product == $scope.item.select) || ($scope.data[i].LicenseNo == $scope.item.select) || ($scope.data[i].UnitName == $scope.item.select) || ($scope.data[i].Brand == $scope.item.select)) {
        if ((Productfound >= 0) || (LicenseNofound >= 0) || (UnitNamefound >= 0) || (Brandfound >= 0)) {

          $scope.items.push($scope.data[i]);

          console.log("nn",$scope.items[i].LicenseNo);
          $scope.notFound="";
          isSearch = true;

        }

      /*  else if (($scope.data[i].Product !== $scope.item.select) || ($scope.data[i].LicenseNo !== $scope.item.select) || ($scope.data[i].UnitName !== $scope.item.select) || ($scope.data[i].Brand !== $scope.item.select)) {

          $scope.notFound = "Product Not Found";
          $scope.show='';
          //$scope.item.select="";
          console.log("ggg",$scope.notFound);

        }*/

      }
      if(!isSearch){
        $scope.notFound = "Product Not Found";

        //$scope.item.select="";
        console.log("ggg",$scope.notFound);
      }
    }

  }
})();
