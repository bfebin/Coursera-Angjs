(function(){

  'use strict';

  angular.module('shoppingListApp',[])

  .controller('ShoppingListController1', ShoppingListController1)
  .controller('ShoppingListController2', ShoppingListController2)
  .factory('ShoppingListFactory',ShoppingListFactory);

   ShoppingListController1.$inject = ['ShoppingListFactory'];

   function ShoppingListController1(ShoppingListFactory){

      var cntrl1 = this;

      var shoppingList = ShoppingListFactory();

      cntrl1.inputName = "";
      cntrl1.inputQuantity="";

      cntrl1.items =shoppingList.getItems();

      cntrl1.itemAdd = function(){
        console.log("Name is "+cntrl1.inputName);
        console.log("Quantity is"+cntrl1.inputQuantity);
        try {
            shoppingList.addItem(cntrl1.inputName,cntrl1.inputQuantity);
        } catch (e) {
          cntrl1.errorMessage = e.message;
        }
      };

      cntrl1.removeItem = function(itemIndex){
             shoppingList.removeItem(itemIndex);
      };

   }

   ShoppingListController2.$inject = ['ShoppingListFactory'];

   function ShoppingListController2(ShoppingListFactory){

      var cntrl2 = this;

      var shoppingList = ShoppingListFactory(3);

      cntrl2.inputName = "";
      cntrl2.inputQuantity="";

      cntrl2.items =shoppingList.getItems();

      cntrl2.itemAdd = function(){
        console.log("Name is "+cntrl2.inputName);
        console.log("Quantity is"+cntrl2.inputQuantity);

        try {
            shoppingList.addItem(cntrl2.inputName,cntrl2.inputQuantity);
        } catch (e) {
          cntrl2.errorMessage = e.message;
        }

      };

      cntrl2.removeItem = function(itemIndex){
             shoppingList.removeItem(itemIndex);
      };

   }


   function ShoppingListFactory(){

      var factory = function(maxItems){
        return new ShoppingListService(maxItems);
      }

     return factory;

   }


   function ShoppingListService(maxItems){

       var service = this;

       var items = [];



       service.addItem = function(itemName, quantity){

         if(maxItems===undefined || (maxItems!==undefined && items.length<maxItems))
         {
            var item = {

            name : itemName,
            quantity : quantity


            };

          items.push(item);
         }else {
           throw new Error("Max Number of Items(3) reached");
         }

       };



       service.getItems = function(){
         return items;
       };


     service.removeItem = function(itemIndex){

         items.splice(itemIndex,1);

     };


   }

})();
