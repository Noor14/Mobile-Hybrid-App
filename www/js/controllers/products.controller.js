(function () {
  angular.module('psqca')
    .controller('ProductsController', productsCtrl);
  productsCtrl.$inject = ['$scope', '$state','$http'];

  function productsCtrl($scope, $state, $http) {

    $scope.item = {
      select : $scope.select
    };
    $http.get('js/data.json').success(function(response){

      $scope.data = response;

      //console.log(response);
    });

    $scope.selecttion={option:""};

    $scope.search = function(){
      console.log("bbb");
      for (var i = 0; i < $scope.data.length; i++) {

        if (($scope.data[i].Product == $scope.item.select) || ($scope.data[i].LicenseNo == $scope.item.select) || ($scope.data[i].UnitName == $scope.item.select) || ($scope.data[i].Brand == $scope.item.select)) {

          $scope.show = $scope.data[i];
          $scope.item.select="";
          console.log("nn",$scope.show);
          $scope.notFound="";
          break;
        }

        else if (($scope.data[i].Product !== $scope.item.select) || ($scope.data[i].LicenseNo !== $scope.item.select) || ($scope.data[i].UnitName !== $scope.item.select) || ($scope.data[i].Brand !== $scope.item.select)) {

          $scope.notFound = "Product Not Found";
          $scope.show='';
          $scope.item.select="";
          console.log("ggg",$scope.notFound);
          break;
        }

      }
    }

  }
})();
