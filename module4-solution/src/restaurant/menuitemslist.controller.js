(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuitemsListController', MenuitemsListController);

MenuitemsListController.$inject = ['$stateParams', 'items'];
function MenuitemsListController($stateParams, items) {
  var menuItemsList = this;
  menuItemsList.items = items;
  menuItemsList.categoryName = $stateParams.categoryName;
}

})();
