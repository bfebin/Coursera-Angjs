(function(){

  'use strict';

  var shoppingList1 = ['Milk','Butter','Bread','Cheese'];
  var shoppingList2 = [
        {
          name : "Banana",
          quantity : "2"
        },
        {
          name : "Pine Apple",
          quantity : "6"
        }


  ]

  angular.module('shoppingListApp',[])

  .controller('shoppingListController', shoppingListController);

   shoppingListController.$inject = ['$scope'];

   function shoppingListController($scope){

      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;


      $scope.itemAdd = function(){

         var newItem = {
              name : $scope.inputName,
              quantity : $scope.inputQuantity

         };
      $scope.shoppingList2.push(newItem);

      };




   }

})()
