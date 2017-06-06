(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of shopping items
  var categories = [];
  var menuItems = [];

  service.getAllCategories  = function(){
    return $http({method: "GET",
       url: ("https://davids-restaurant.herokuapp.com/categories.json")}).then(function (result) {

         console.log(result.data);
          categories = result.data;
    // return processed items
        return categories;
  }).catch(function(error){
    console.log("The Error from Server is "+error)
  });
 };

this.getItemsForCategory = function(categoryShortName){
  return $http({method: "GET",
     url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)}).then(function (result) {
        menuItems = result.data.menu_items;
  // return processed items
      return menuItems;
}).catch(function(error){
  console.log("The Error from Server is "+error)
});
}

  service.getCategories = function () {
       return cateories;
  };

  service.getMenuItems = function(){
    return menuItems;
  }
}

})();
