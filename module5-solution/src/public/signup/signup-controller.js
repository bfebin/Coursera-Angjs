(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService','ApiPath'];
function SignupController(MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  $ctrl.checkValidShortName = function(shortname){
    // MenuService.getUserdetails().shortname;
     MenuService.checkMenuItem($ctrl.user.shortname).then(function(data){
       console.log(data);
       $ctrl.valid =true;
       shortname.$setValidity('some',true);
     }).catch(function(error){
       console.log('The message ',error)
        $ctrl.valid =false;
        shortname.$setValidity('some',false);
     });

  };

  $ctrl.submit = function(){
    MenuService.submitUserdetails($ctrl.user);
    $ctrl.message = "Your information has been saved Successfully";
  };


  // $ctrl.getUserDetails = function(){
  //    return MenuService.getUserdetails();
  // };
  //
  // $ctrl.menuDetails = function(shortName){
  //   MenuService.checkMenuItem(shortName).then(function(data){
  //       return data;
  //   }).catch(function(error){
  //     console.log('Get menu details ',error);
  //   });
  // };

}

})();
