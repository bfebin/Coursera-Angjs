(function(){

  angular.module('calculatorApp',[])
  .controller('calculatorController',function($scope){

    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric=function(){

       var totalNameValue = calculateNumericForString($scope.name);
       $scope.totalValue = totalNameValue;

    }
    function calculateNumericForString(string){
      var totalStringvalue = 0;
      for(var i=0;i<string.length;i++){
        totalStringvalue+=string.charCodeAt(i);
      }
      return totalStringvalue;
    }


  });
})()
