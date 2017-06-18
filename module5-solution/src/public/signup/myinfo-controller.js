(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','ApiPath', 'menuItem'];
function MyinfoController(MenuService, ApiPath,menuItem) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.menuItem = menuItem;

  console.log("Data my controller",menuItem);

  $ctrl.getUserDetails = function(){
     return MenuService.getUserdetails();
  };
}


})();
