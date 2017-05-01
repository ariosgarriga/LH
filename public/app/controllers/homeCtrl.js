var app = angular.module('homeController', ['houseServices', 'authServices', 'userServices'])

.controller('homeCtrl', function($http, $anchorScroll, filepickerService, $interpolate, $scope, $filter, $window, $rootScope, $location, $timeout, User, House, $routeParams, Auth) {
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
  $scope.max = 10;
  $scope.idSelected = [];
  $scope.disabled = false;
  app.compare = [];

  $scope.availableSearchParams = [
    { key: "address", name: "Direccion", placeholder: " " },
    { key: "rooms", name: "Cuartos", placeholder: " ", allowMultiple: true, restrictToSuggestedValues: true, suggestedValues: ['1', '2', '3']},
  ];

  $scope.setSelected = function(id){

    if ($scope.idSelected.length) {
      if($scope.idSelected.indexOf(id) === -1){
        if ($scope.idSelected.length < 2) {
          $scope.idSelected.push(id);
          console.log($scope.idSelected);

        } else {
          $scope.idSelected.shift();
          $scope.idSelected.push(id);
          console.log($scope.idSelected);
        }
        $scope.disabled = true;
      } else {
        for (var i = 0; i < $scope.idSelected.length; i++) {
          if ($scope.idSelected[i] === id) {
            $scope.idSelected.splice(i, 1);
          }
        }
        $scope.disabled = false;
      }

    } else {
      $scope.idSelected.push(id);
      console.log($scope.idSelected);
      $scope.disabled = false;
    }
  }

  $scope.setClassSelected = function(id){
    if($scope.idSelected.length){
      for (var i = 0; i < $scope.idSelected.length; i++) {
        if($scope.idSelected[i] === id)
        return "selected";
      }
    }

  }

  app.compareHouses = function(){
    $("#compareModal").modal({backdrop: "static"});
    for (var i = 0; i < app.houses.length; i++) {
      if(app.houses[i]._id === $scope.idSelected[0]){
        app.compare[0] = app.houses[i];
        if(app.compare[0].guard){
          app.compare[0].guard = "Si";
        } else {
          app.compare[0].guard = "No";
        }
        if(app.compare[0].streetclose){
          app.compare[0].streetclose = "Cerrada";
        } else {
          app.compare[0].streetclose = "Abierta";
        }
      }
      if(app.houses[i]._id === $scope.idSelected[1]){
        app.compare[1] = app.houses[i];
        if(app.compare[1].guard){
          app.compare[1].guard = "Si";
        } else {
          app.compare[1].guard = "No";
        }
        if(app.compare[1].streetclose){
          app.compare[1].streetclose = "Cerrada";
        } else {
          app.compare[1].streetclose = "Abierta";
        }
      }
    }

  }


  $scope.upload = function(){
    filepickerService.pick(
      {
        mimetype: 'image/*',
        language: 'es',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'COMPUTER'
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
        language: 'es',
        maxFiles: $scope.max, //pickMultiple has one more option
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'COMPUTER'
      },
      function(Blob){
        $scope.superhero.morePictures = Blob;
        $scope.max = $scope.max-Blob.length;
        console.log($scope.max);
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

    var LaFlorestaCoords = [
      {lng: -66.8484547175467, lat: 10.495428761731864},
      {lng: -66.84319758787751, lat: 10.496789623167475},
      {lng: -66.84313321486115, lat: 10.494795800884317},
      {lng: -66.84339070692658, lat: 10.494510968080306},
      {lng: -66.84276843443513, lat: 10.493382183648023},
      {lng: -66.84302592650056, lat: 10.492095153381955},
      {lng: -66.84329414740205, lat: 10.490776469277407},
      {lng: -66.84246802702546, lat: 10.489141293182778},
      {lng: -66.84079432860017, lat: 10.488772058675266},
      {lng: -66.84077287092805, lat: 10.488487220325627},
      {lng: -66.84281134977937, lat: 10.488592716041241},
      {lng: -66.84518242254853, lat: 10.488845905612017},
      {lng: -66.84781098738313, lat: 10.489478878632676},
      {lng: -66.84825086966157, lat: 10.49063932580788}
    ];

    var LaFloresta = new google.maps.Polygon({
      paths: LaFlorestaCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1
    });

    LaFloresta.setMap(app.map);


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
  $scope.hideModal2 = function() {
    $("#compareModal").modal('hide');
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
    app.regData.dateCreated = Date.now();

    House.create(app.regData).then(function(data){
      if (data.data.success) {
        //Create Success Message
        app.successMsg = data.data.message;
        //Redirect to home page
        $anchorScroll();
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
        console.log(app.houses);
      } else {
        //Create error message
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });

  };

  app.getHouses();

});

app.filter('customSearch',[function(){
    /** @data is the original data**/
    /** @address is the search query for address**/
    /** @max is the search query for max**/
    return function(data,address,max,min){
        var output = []; // store result in this

        /**@case1 if both searches are present**/
        if(!!address && !!max && !!min){
            address = address.toLowerCase();
            //loop over the original array
            for(var i = 0;i<data.length; i++){
                // check if any result matching the search request
                if(data[i].address.toLowerCase().indexOf(address) !== -1 && data[i].price <= max && data[i].price >= min){
                    //push data into results array
                    output.push(data[i]);
                }
            }
        } else if(!!address && !!max){ /**@case2 if only address query is present**/
            address = address.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].address.toLowerCase().indexOf(address) !== -1 && data[i].price <= max){
                    output.push(data[i]);
                }
            }
        } else if(!!address && !!min){ /**@case2 if only address query is present**/
            address = address.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].address.toLowerCase().indexOf(address) !== -1 && data[i].price >= min){
                    output.push(data[i]);
                }
            }
        }else if(!!address){ /**@case2 if only address query is present**/
            address = address.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].address.toLowerCase().indexOf(address) !== -1){
                    output.push(data[i]);
                }
            }
        } else if(!!max && !!min){ /**@case3 if only max query is present**/
            for(var i = 0;i<data.length; i++){
                if(data[i].price <= max && data[i].price >= min){
                    output.push(data[i]);
                }
            }
        }else if(!!max){ /**@case3 if only max query is present**/
            for(var i = 0;i<data.length; i++){
                if(data[i].price <= max){
                    output.push(data[i]);
                }
            }
        }  else if(!!min){ /**@case3 if only max query is present**/
            for(var i = 0;i<data.length; i++){
                if(data[i].price >= min){
                    output.push(data[i]);
                }
            }
        } else {
            /**@case4 no query is present**/
            output = data;
        }
        return output; // finally return the result
    }
}]);
