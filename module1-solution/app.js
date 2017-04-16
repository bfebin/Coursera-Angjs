(function(){
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject  = ['$scope','$filter'];

  function LunchCheckController ($scope, $filter){

    $scope.lunchmenu = "";
    $scope.message = "";
    $scope.state = "";

    $scope.lunchCheck = function(){

      var comma = ',';
      var length = splitString($scope.lunchmenu, comma);

      if($scope.lunchmenu==""){
         $scope.message="Please enter data first"
         $scope.state ="Error";
      }
       else if(length==0){
       $scope.message="Please enter data first";
        $scope.state ="Error";
      }else
      if(length<=3){
          $scope.message = "Enjoy!"
          $scope.state ="Success";
      }else if(length>3){
        $scope.message = "Too much!";
          $scope.state ="Success";
      }

    }
    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
      var count = 0;
      for(var i=0;i<arrayOfStrings.length;i++){
         if(arrayOfStrings[i].trim()!=''){
              count++;
         }
      }
      return count;
    }


  }
})();
