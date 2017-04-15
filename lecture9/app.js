(function(){

  angular.module('DIApp',[])
  .controller('DIController',DIController);

  function DIController ($scope, $filter){

    $scope.name = "Febin";
    $scope.upper = function(){
      var upcase = $filter('uppercase');
      $scope.name = upcase($scope.name);
    }

  }
})()
