var app = angular.module('homeController', ['houseServices', 'authServices', 'userServices'])

.controller('homeCtrl', function($http, filepickerService, $interpolate, $scope, $filter, $window, $rootScope, $location, $timeout, User, House, $routeParams, Auth) {
  var app = this;
  app.regData = {};
  $scope.superhero = {};
  app.regData.rooms = "0";
  app.regData.bathrooms ="0";
  app.regData.parking = "0";
  app.regData.streetclose = false;
  app.regData.guard = false;
  $scope.regHouseForm = false;
  app.streetclose = "No";
  app.guard = "No";
  app.houses = [];


  $scope.upload = function(){
    filepickerService.pick(
      {
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'IMAGE_SEARCH'
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        $scope.superhero.picture = Blob;
        app.regData.picture = Blob;

        $scope.$apply();
      }
    );
  };

  $scope.uploadMultiple = function(){
    filepickerService.pickMultiple(
      {
        mimetype: 'image/*',
        language: 'en',
        maxFiles: 10, //pickMultiple has one more option
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'COMPUTER'
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        $scope.superhero.morePictures = Blob;
        app.regData.morePictures = Blob;
        $scope.$apply();
      }
    );
  };

  app.initMap = function() {
    app.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 10.4806, lng: -66.9036},
      zoom: 16
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        app.map.setCenter(pos);
      });
    }
  }

  app.initMap();

  $scope.$watch('regHouseForm', function () {
    window.setTimeout(function(){
      google.maps.event.trigger(app.map, 'resize');
    },100);
  });



  app.streetcloseText = function(){
    if(app.regData.streetclose){
      app.streetclose = "No";
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
    if(Auth.isLoggedIn()){
      if ($scope.regHouseForm) {
        $scope.regHouseForm = false;
      } else {
        $scope.regHouseForm = true;
      }
    } else {
      $("#userHouseAuth").modal({backdrop: "static"});
    }

  }
  $scope.hideModal = function() {
    $("#userHouseAuth").modal('hide');
  };




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
    app.regData.lat = app.map.getCenter().lat();
    app.regData.lng = app.map.getCenter().lng();

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

  app.getHouses = function(){
    House.getHouses().then(function(data){
      if (data.data.success) {
        //Redirect to home page
        app.houses = data.data.houses;
      } else {
        //Create error message
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });

  };

  app.getHouses();

});
