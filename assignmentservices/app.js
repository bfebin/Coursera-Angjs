(function(){

  'use strict';

  angular.module('shoppingListApp',[])

  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('ShoppingListViewController',ShoppingListViewController)
  .service('ShoppingListService',ShoppingListService);

   ShoppingListAddController.$inject = ['ShoppingListService'];

   function ShoppingListAddController(ShoppingListService){

      var itemAddr = this;

      itemAddr.inputName = "";
      itemAddr.inputQuantity="";


      itemAddr.itemAdd = function(){
        console.log("Name is "+itemAddr.inputName);
        console.log("Quantity is"+itemAddr.inputQuantity);
        ShoppingListService.addItem(itemAddr.inputName,itemAddr.inputQuantity);
      };

   }

    ShoppingListViewController.$inject = ['ShoppingListService'];
   function ShoppingListViewController(ShoppingListService){

      var showList = this;

      showList.items = ShoppingListService.getItems();

      showList.removeItem = function(itemIndex){

              ShoppingListService.removeItem(itemIndex);

      }

   }


   function ShoppingListService(){

       var service = this;

       var items = [];


       service.addItem = function(itemName, quantity){

         var item = {

            name : itemName,
            quantity : quantity


         };

         items.push(item);
       };


       service.getItems = function(){
         return items;
       };


     service.removeItem = function(itemIndex){

         items.splice(itemIndex,1);

     };


   }

})();
