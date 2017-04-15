(function(){

  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){

    $scope.name = "Febin";

    $scope.sayHello = function(){
      return "My Name is "+$scope.name;
    }


  });
})()
