angular.module('homeController', ['houseServices', 'authServices', 'userServices'])

.controller('homeCtrl', function($http, $scope, $window, $rootScope, $location, $timeout, User, House, $routeParams, Auth) {
  var app = this;
  app.regData = {};
  app.regData.rooms = "0";
  app.regData.bathrooms ="0";
  app.regData.parking = "0";
  app.regData.streetclose = false;
  app.regData.guard = false;
  app.regHouseForm = true;
  app.streetclose = "No";
  app.guard = "No";

  app.initMap = function() {
    app.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  app.initMap2 = function() {
    console.log(app.map.getCenter().toJSON());
  }

  app.initMap();


  app.streetcloseText = function(){
    if(app.regData.streetclose){
      app.streetclose = "No";
        app.initMap2();
    } else {
      app.streetclose = "Si";
    }
  }

  app.guardText = function(){
    if(app.regData.guard){
      app.guard = "No";
    } else {
      app.guard = "Si";
    }
  }


  app.addHouse = function(){
    if (app.regHouseForm) {
      app.regHouseForm = false;
    } else {
      app.regHouseForm = true;
    }
  }




  if (Auth.isLoggedIn()) {
    app.isLoggedIn = true;
    Auth.getUser().then(function(data){
      app.name = data.data.name;
      app.email = data.data.email;
      app.id = data.data.id;
      User.getUser(data.data._id).then(function(data){
        app.user = data.data.user;
      });
    });
  } else {
    app.isLoggedIn = false;
    app.name = '';
    app.email = '';
    app.loadme = true;
  }

  this.regHouse = function(regData){
    app.loading = true;
    app.errorMsg = false;
    app.successMsg = false;
    app.regData.id_user = app.user._id;
    console.log(app.regData);

    House.create(app.regData).then(function(data){
      if (data.data.success) {
        //Create Success Message
        app.successMsg = data.data.message + " ...Redireccionando";
        //Redirect to home page
        $timeout(function () {
          $window.location.reload();
        }, 2000);

      } else {
        //Create error message
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });
  };
});
