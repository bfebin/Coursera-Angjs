(function () {
'use strict';

angular.module('MenuApp')
.component('menuitemsList', {
  templateUrl: 'src/restaurant/templates/menuitemslist.template.html',
  bindings: {
    menuItems: '<'
  }
});

})();
