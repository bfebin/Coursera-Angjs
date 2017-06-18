(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


/*
*Will check the menu item by short name exist or not
*/
  service.checkMenuItem = function(shortName){
    return $http.get(ApiPath + '/menu_items/'+shortName+'.json').then(function (response) {
      return response.data;
    });
  };

/*
*Will store the user details in user variable
*/
  service.submitUserdetails=function(userdetails){
    user= userdetails;
  }

  /*
  *Will get the details from user
  */
  service.getUserdetails=function(){
    return user;
  }


}



})();
