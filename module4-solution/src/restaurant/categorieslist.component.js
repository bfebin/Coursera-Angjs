(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/restaurant/templates/categorieslist.template.html',
  bindings: {
    categoryItems: '<'
  }
});

})();
