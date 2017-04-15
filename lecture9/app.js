(function(){

  angular.module('DIApp',[])
  .controller('DIController',DIController);

  DIController.$inject  = ['$scope','$filter'];

  function DIController ($scope, $filter){

    $scope.name = "Febin";
    $scope.upper = function(){
      var upcase = $filter('uppercase');
      $scope.name = upcase($scope.name);
    }

  }
})()
