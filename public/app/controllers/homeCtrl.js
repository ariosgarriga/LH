var app = angular.module('homeController', ['houseServices', 'authServices', 'userServices', 'locationServices'])

.controller('homeCtrl', function($http, $anchorScroll, filepickerService, $interpolate, $scope, $filter, $window, $rootScope, $location, $timeout, Areas, User, House, $routeParams, Auth) {
  var app = this;
  app.regData = {};
  $scope.superhero = {};
  app.regData.rooms = "0";
  app.regData.bathrooms ="0";
  app.regData.parking = "0";
  app.regData.floors = "0";
  app.regData.streetclose = false;
  app.regData.guard = false;
  $scope.regHouseForm = false;
  app.streetclose = "No";
  app.guard = "No";
  app.exclusive = "Sin"
  app.houses = [];
  $scope.max = 10;
  $scope.idSelected = [];
  $scope.disabled = false;
  app.compare = [];
  app.regData.zonetype = 'N/D';
  $scope.priorities = false;
  $scope.orderByHouses = 'price';
  function compare(a,b) {
    if (a.nombre < b.nombre)
      return -1;
    if (a.nombre > b.nombre)
      return 1;
    return 0;
  }
  app.availableOptions= [
    {nombre: 'Baños', name: 'bathrooms'},
    {nombre: 'Cuartos', name: 'rooms'},
    {nombre: 'Dimensiones (Ancho)', name: 'dimensionsX'},
    {nombre: 'Dimensiones (Largo)', name: 'dimensionsY'},
    {nombre: 'Pisos', name: 'floors'},
    {nombre: 'Metros de Construción', name: 'consmeters'},
    {nombre: 'Metro Cuadrados', name: 'meters'},
    {nombre: 'Precio', name: 'price'},
    {nombre: 'Estacionamiento', name: 'parking'},
    {nombre: 'Calle Cerrada', name: 'streetclose'},
    {nombre: 'Vigilante', name: 'guard'},
    {nombre: 'Distancia', name: 'latlng'}
  ];
  app.availableOptions.sort(compare);
  app.prioritySelected = '--Seleccione--';
  app.priorityGoal = [];
  app.priorityInputA = '';
  app.priorityInputB = '0';
  app.priorityInputC = 'Si';
  app.leftPercentaje = 0;
  $scope.myDataSource = {
      chart: {
          caption: "Age profile of website visitors",
          subcaption: "Last Year",
          startingangle: "120",
          showlabels: "0",
          showlegend: "1",
          enablemultislicing: "0",
          slicingdistance: "15",
          showpercentvalues: "1",
          showpercentintooltip: "0",
          plottooltext: "Age group : $label Total visit : $datavalue",
          theme: "fint"
      },
      data: []
  }
  $scope.auxPlusGoal = 0;
  $scope.orderByToggle = true;
  $scope.orderByArgument = 'created_at';
  app.calcM = false;
  $scope.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $scope.labelIndex = 0;
  $scope.goalMarkers = [];
  $scope.time = [];
  var directionsService = new google.maps.DirectionsService();
  app.regData.type = 'Casa';


  app.initMapGoals = function() {
    app.mapGoals = new google.maps.Map(document.getElementById('map-goals'), {
      center: {lat: 10.491961, lng: -66.845288},
      zoom: 16
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        app.mapGoals.setCenter(pos);
      });
    }

    app.mapGoals.addListener('click', function(event) {
      if (!$scope.markerGoal) {
        $scope.markerGoal = new google.maps.Marker({
          position: event.latLng,
          map : app.mapGoals,
          label: $scope.labels[$scope.labelIndex++ % $scope.labels.length],
          draggable: true
        });

      }
        console.log($scope.markerGoal);
    });

  }

  app.initMapGoals();




  app.blockCalc = function(){
    app.regData.dimensionsX = "";
    app.regData.dimensionsY = "";
    app.regData.meters = "";
  }

  app.calculateMeters = function(){
    app.regData.meters = app.regData.dimensionsY * app.regData.dimensionsX;
  }


  $scope.sheckLogIng = function(){
    if (Auth.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }


  $scope.availableSearchParams = [
    { key: "address", name: "Direccion", placeholder: " " },
    { key: "rooms", name: "Cuartos", placeholder: " ", allowMultiple: true, restrictToSuggestedValues: true, suggestedValues: ['1', '2', '3']},
  ];


  app.sortPriorities = function(){
    var auxPriority = JSON.parse(angular.toJson(app.priorityGoal));
    console.log($scope.time);

    function compare(a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    auxPriority.sort(compare);

    for (var i = 0; i < auxPriority.length; i++) {
      if (auxPriority[i].value == 'Si') {
        auxPriority[i].value = 1;
      } else if (auxPriority[i].value == 'No' ){
        auxPriority[i].value = 0;
      } else if (auxPriority[i].position) {
        var min=9999999999999;
        for (var k = 0; k < $scope.time.length; k++) {
          if ($scope.time[k].value == auxPriority[i].value) {
            for (var p = 0; p < $scope.time[k].tiempos.length; p++) {

              if ($scope.time[k].tiempos[p].routes[0].legs[0].duration.value < min) {
                min = $scope.time[k].tiempos[p].routes[0].legs[0].duration.value;
              }
            }

          }
        }
        auxPriority[i].min = min;
      }
    }


    console.log(auxPriority);

    for (var i = 0; i < app.houses.length; i++) {
      var house = [];

      for (var j = 0; j < auxPriority.length; j++) {
        var aux = auxPriority[j].name;

        if (aux == 'streetclose' || aux == 'guard') {

          if (app.houses[i][aux]) {
            house.push(1);
          } else {
            house.push(0);
          }

        }else if (auxPriority[j].position) {

          for (var k = 0; k < $scope.time.length; k++) {
            if ($scope.time[k].value == auxPriority[j].value) {
              for (var p = 0; p < $scope.time[k].tiempos.length; p++) {
                if ($scope.time[k].tiempos[p].idHouse == app.houses[i]._id) {
                  house.push($scope.time[k].tiempos[p].routes[0].legs[0].duration.value);
                }
              }
            }
          }

        } else {
          house.push(app.houses[i][aux]);
        }
      }

      console.log(house);

      var z = 0;
      var aux = 0;

      for (var j = 0; j < auxPriority.length; j++) {

        if (auxPriority[j].name == 'price') {
          aux = house[j] - auxPriority[j].value;
        } else if (auxPriority[j].position) {
          aux = house[j] - auxPriority[j].min;
        } else {
          aux =  auxPriority[j].value - house[j];
        }

        if(aux<0){
          aux = 0;
        }

        var aux2 = 0;
        if (auxPriority[j].name == 'guard' || auxPriority[j].name == 'streetclose') {
          if (auxPriority[j].value == house[j]) {
            aux2 = 0;
          } else {
            aux2 = auxPriority[j].percentaje * 0.1;
          }
        } else if (auxPriority[j].position) {
          aux2 = auxPriority[j].percentaje * 0.1 * aux / auxPriority[j].min;
        } else {
          aux2 = auxPriority[j].percentaje * 0.1 * aux / auxPriority[j].value;
        }
        z = z + aux2;

      }
      app.houses[i].z = z;

    }
    $scope.orderByToggle = false;
    $scope.orderByArgument = 'z';
  }

  app.resetOrder = function(){
    $scope.orderByToggle = true;
    $scope.orderByArgument = 'created_at';
    for (var i = app.priorityGoal.length; i > 0; i--) {
      $scope.ereasePriority(i-1);
    }
  }

  $scope.plusPercentaje = function(index){
    app.priorityGoal[index].percentaje++;
    app.leftPercentaje--;
    if (app.leftPercentaje == 0) {
      $scope.updateGraph();
    }
  }

  $scope.updateGraph = function(){
    for (var i = 0; i < $scope.myDataSource.data.length; i++) {
      $scope.myDataSource.data[i].value = app.priorityGoal[i].percentaje;
    }
  }

  $scope.minusPercentaje = function(index){
    app.priorityGoal[index].percentaje--;
    app.leftPercentaje++;
  }

  app.addPriority = function(){
    if($scope.priorities){
      $scope.priorities = false;
    } else {
      $scope.priorities = true;
      $scope.regHouseForm = false;
    }
  }

  $scope.ereasePriority = function(index){
    app.leftPercentaje = 10;
    var option = {
      nombre: app.priorityGoal[index].nombre,
      name: app.priorityGoal[index].name
    }
    if (option.nombre != 'Distancia') {
      app.availableOptions.push(option);
    } else {
      for (var i = 0; i < $scope.goalMarkers.length; i++) {
        if ($scope.goalMarkers[i].label == app.priorityGoal[index].value) {
          $scope.goalMarkers[i].setMap(null);
          $scope.time.splice(i,1);
        }
      }
    }

    function compare(a,b) {
      if (a.nombre < b.nombre)
        return -1;
      if (a.nombre > b.nombre)
        return 1;
      return 0;
    }

    app.availableOptions.sort(compare);
    $scope.myDataSource.data.splice(index, 1);
    app.priorityGoal.splice(index, 1);

    for (var i = 0; i < app.priorityGoal.length; i++) {
      app.priorityGoal[i].percentaje = Math.trunc(10/app.priorityGoal.length);
      app.leftPercentaje = app.leftPercentaje - app.priorityGoal[i].percentaje;
    }

    if (app.leftPercentaje == 0) {
      $scope.updateGraph();
    } else if (app.leftPercentaje ==  10) {
      app.leftPercentaje = 0;
    }

    $scope.auxPlusGoal--;
  }

  app.addGoal = function() {
    $scope.auxPlusGoal++;
    var goal = {};
    var data = {};
    var index = 0;
    app.leftPercentaje = 10;
    goal.nombre = app.prioritySelected;
    data.label = app.prioritySelected;
    data.value = 0;
    $scope.myDataSource.data.push(data);


    if (app.prioritySelected !== '--Seleccione--') {
      if (app.prioritySelected == 'Baños'|| app.prioritySelected == 'Cuartos' || app.prioritySelected == 'Estacionamiento' || app.prioritySelected == 'Pisos') {
        goal.value = app.priorityInputB;
      } else if (app.prioritySelected == 'Calle Cerrada'|| app.prioritySelected == 'Vigilante') {
        goal.value = app.priorityInputC;
      } else if (app.prioritySelected == 'Distancia') {
        goal.position = $scope.markerGoal.position;
        goal.value = $scope.markerGoal.label;
        $scope.markerGoal.setDraggable(false);
        $scope.goalMarkers.push($scope.markerGoal);

        $scope.index = $scope.time.length;
        var obj = {
          value:$scope.markerGoal.label,
          tiempos: []
        }
        $scope.time.push(obj);

        for (var k = 0; k < app.houses.length; k++){

          var calcRoute = function(id,origin,destination,cb) {
            var dist;
            var directionsService = new google.maps.DirectionsService();
            var request = {
              origin:origin,
              destination:destination,
              travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                response.idHouse = id;
                cb(null, response);
              } else {
                cb(status);
              }
            });
          };

          calcRoute(app.houses[k]._id, new google.maps.LatLng(app.houses[k].lat, app.houses[k].lng),$scope.markerGoal.position, function (err, dist) {
            if (!err) {
              $scope.time[$scope.index].tiempos.push(dist);
            } else if (err == google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
              $timeout(function () {
                var aux = $scope.time[$scope.index].tiempos.length;
                var end;
                for (var i = 0; i < $scope.goalMarkers.length; i++) {
                  if ($scope.goalMarkers[i].label == $scope.time[$scope.index].value){
                    end = $scope.goalMarkers[i].position;
                  }
                }
                for (var p = aux; p < app.houses.length; p++) {
                  calcRoute(app.houses[p]._id, new google.maps.LatLng(app.houses[p].lat, app.houses[p].lng),end, function (err, dist) {
                    if (!err) {
                      $scope.time[$scope.index].tiempos.push(dist);
                    }else {
                      console.log(err);
                    }
                  });
                }
              }, 5000);
            } else {
              console.log(err);
            }
          });
        }

      } else {
        goal.value = app.priorityInputA;
      }
    }
    app.priorityGoal.push(goal);

    for (var i = 0; i < app.availableOptions.length; i++) {
      if (app.availableOptions[i].nombre === app.prioritySelected) {
        goal.name = app.availableOptions[i].name;
        index = i;
      }
    }

    for (var i = 0; i < app.priorityGoal.length; i++) {
      app.priorityGoal[i].percentaje = Math.trunc(10/app.priorityGoal.length);
      app.leftPercentaje = app.leftPercentaje - app.priorityGoal[i].percentaje;
    }

    if (app.leftPercentaje == 0) {
      $scope.updateGraph();
    }

    if (app.prioritySelected != 'Distancia') {
      app.availableOptions.splice(index, 1);
    }

    app.prioritySelected = '--Seleccione--';
    app.priorityInputA = '';
    app.priorityInputB = 0;
    app.priorityInputC = 'Si';
    $scope.markerGoal = null;
    console.log(app.priorityGoal);
  }



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
      center: {lat: 10.491961, lng: -66.845288},
      zoom: 16
    });

    app.map.polyArray = [];

    for (var i = 0; i < Areas.length; i++) {
      app.map.polyArray.push(Areas[i]);
      app.map.polyArray[i].setMap(app.map);
    }

    app.map.addListener('dragend', showArrays);
    app.map.addListener('zoom_changed', showArrays);



    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     app.map.setCenter(pos);
    //   });
    // }
  }

  function showArrays() {
    for (var i = 0; i < app.map.polyArray.length; i++) {
      if(google.maps.geometry.poly.containsLocation(app.map.getCenter(), app.map.polyArray[i]) == true) {
        app.regData.zonetype = app.map.polyArray[i].zonetype;

        return
      }
    }
    app.regData.zonetype = 'N/D';
  }


  app.initMap();



  $scope.$watch('regHouseForm', function () {

    window.setTimeout(function(){
      google.maps.event.trigger(app.map, 'resize');
    },100);
  });

  $scope.$watch(angular.bind(this, function (prioritySelected) {
    return this.prioritySelected;
  }), function (newVal, oldVal) {
    // console.log('Name changed to ' + newVal);
    window.setTimeout(function(){
      google.maps.event.trigger(app.mapGoals, 'resize');
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

  app.exclusiveText = function(){
    if(app.regData.pro_exclusive){
      app.exclusive = "Sin";
    } else {
      app.exclusive = "Con";
    }
  }


  app.addHouse = function(){
    if(Auth.isLoggedIn()){
      if ($scope.regHouseForm) {
        $scope.regHouseForm = false;
      } else {
        $scope.regHouseForm = true;
        $scope.priorities = false;
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
        // console.log(app.houses);
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
        }  else if(!!min){ /**@case3 if only min query is present**/
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
