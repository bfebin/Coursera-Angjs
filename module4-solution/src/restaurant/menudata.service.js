(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http','$rootScope']
function MenuDataService($http, $rootScope) {
  var service = this;

  // List of shopping items
  var categories = [];
  var menuItems = [];

  var loadingEventName = 'spinner:activate';

  service.getAllCategories  = function(){

    $rootScope.$broadcast(loadingEventName, {on: true});
    return $http({method: "GET",
       url: ("https://davids-restaurant.herokuapp.com/categories.json")}).then(function (result) {

         console.log(result.data);
          categories = result.data;
    // return processed items
        return categories;
  }).catch(function(error){
    console.log("The Error from Server is "+error)
  }).finally(function(){
        $rootScope.$broadcast(loadingEventName, { on: false });
  });
 };

this.getItemsForCategory = function(categoryShortName){
    $rootScope.$broadcast(loadingEventName, {on: true});
  return $http({method: "GET",
     url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)}).then(function (result) {
        menuItems = result.data.menu_items;
  // return processed items
      return menuItems;
}).catch(function(error){
  console.log("The Error from Server is "+error)
}).finally(function(){
      $rootScope.$broadcast(loadingEventName, { on: false });
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
