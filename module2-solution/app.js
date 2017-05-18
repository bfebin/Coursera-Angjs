(function(){

  'use strict';

  angular.module('ShoppingListCheckOff',[])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

   ToBuyController.$inject = ['ShoppingListCheckOffService'];

   function ToBuyController(ShoppingListCheckOffService){

      var buyItems = this;

     buyItems.items = ShoppingListCheckOffService.getBuyItems();

      buyItems.toBuyItems = function(itemIndex){

         ShoppingListCheckOffService.buyItems(itemIndex);

      };

   }

   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtController(ShoppingListCheckOffService){

      var boughtItems = this;

      boughtItems.items = ShoppingListCheckOffService.getBoughtItems();


   }


   function ShoppingListCheckOffService(){

       var service = this;

       var toBuyItems = [
         {
           name : "Cookies",
           quantity : 10
         },
         {
           name : "Biscuits",
           quantity : 10
         },
         {
           name : "Cakes",
           quantity : 5
         },
         {
           name : "Cool Drinks",
           quantity : 7
         },
         {
           name : "Pastry",
           quantity : 2
         }

       ];
       var boughtItems = [];


       service.buyItems = function(itemIndex){

         var item = toBuyItems[itemIndex];

         boughtItems.push(item);

         toBuyItems.splice(itemIndex,1);
       };


       service.getBuyItems = function(){
         return toBuyItems;
       };

       service.getBoughtItems = function(){
         return boughtItems;
       };



   }

})();
