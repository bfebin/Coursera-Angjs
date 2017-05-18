(function(){

  angular.module('DIApp',[])
  .controller('DIController',DIController)
  .filter('loves',LovesFilter)
  .filter('truth',TruthFilter);

  DIController.$inject  = ['$scope','$filter','lovesFilter'];

  function DIController ($scope,$filter, lovesFilter){

    $scope.name = "Febin";
    $scope.cookieCost = 0.56;
    $scope.upper = function(){

      var upcase = $filter('uppercase')($scope.name);
    //  $scope.name = upcase($scope.name);
        $scope.name = upcase;
    };

    $scope.lovesMessage = function(){

      var msg = "Febin likes Deena";

      msg = lovesFilter(msg);

      return msg;
    }

  }

  function LovesFilter(){

     return function(input){

       input = input || "";
       input = input.replace("likes","loves");

       return input;

     };

  }

  function TruthFilter()
  {
      return function(input, source, target){

        input = input || "";
        input = input.replace(source,target);

        return input;

      };
  }


})()
