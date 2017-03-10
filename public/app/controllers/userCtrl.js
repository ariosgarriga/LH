angular.module('userControllers', ['userServices'])

.controller('regCtrl', function($http, $location, $timeout, User) {

  var app = this;
  app.regData = {};
  app.regData.gender = "Hombre";
  app.regData.city = "Caracas";

  this.regUser = function(regData){
    app.loading = true;
    app.errorMsg = false;
    app.successMsg = false;

    User.create(app.regData).then(function(data){
      if (data.data.success) {
        //Create Success Message
        app.successMsg = data.data.message + " ...Redireccionando";
        //Redirect to home page
        $timeout(function () {
          $location.path('/');
        }, 2000);

      } else {
        //Create error message
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });
  };

});
