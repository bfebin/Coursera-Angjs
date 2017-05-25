(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

//FoundItemsDirective
function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
        items: '<',
        onRemove: '&',
        errorMessage: '@'
    },
       controller: FoundItemsDirectiveController,
       controllerAs: 'list',
       bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.isItemFound = function () {
    if(list.items.length===0){
      return false;
    }else{
      return true;
    }
  };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var list = this;

   list.searchTerm = "";

   list.message = "";

   list.found = [];
  // list.found = MenuSearchService.getMatchedMenuItems(list.searchTerm);;
   list.matchedItems = function(){

    console.log(list.searchTerm);
        var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

        promise.then(function (response){
            console.log(response);
              list.found = response;

              if(list.found.length===0){
                list.message = "Nothing Found";
              }else{
                list.message = "";
              }

       });

   };

//This method will remove the item in the service
   list.removeItem = function(indexItem){

     MenuSearchService.removeItem(indexItem);
     list.found = MenuSearchService.getItems();
     console.log(indexItem);
   };

}


// If not specified, maxItems assumed unlimited
MenuSearchService.$inject = ['$http','ApiBasePath','$filter'];
function MenuSearchService($http, ApiBasePath,$filter) {
  var service = this;

   var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm){

    return $http({method: "GET",
       url: (ApiBasePath + "/menu_items.json")}).then(function (result) {

    if(foundItems.length!==0){
      foundItems = [];
    }
    // process result and only keep items that match
    if(searchTerm.trim()!=="" ){

      for(var i=0;i<result.data.menu_items.length;i++){

        if($filter('uppercase')(result.data.menu_items[i].description).indexOf($filter('uppercase')(searchTerm))!==-1){
              foundItems.push(result.data.menu_items[i]);
        }
      }



    }
    // return processed items
    return foundItems;
  });


  }

  service.removeItem = function(itemIndex){
    foundItems.splice(itemIndex,1);
  }

  service.getItems = function () {
     return foundItems;
   }

}




})();
