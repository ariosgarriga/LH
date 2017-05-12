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
  app.regData.zonetype = 'N/D';
  app.priorities = true;
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
    {nombre: 'Dimensiones (Alto)', name: 'dimensionsZ'},
    {nombre: 'Metros de Construción (m^2)', name: 'consmeters'},
    {nombre: 'Metro Cuadrados (m^2)', name: 'meters'},
    {nombre: 'Precio', name: 'price'},
    {nombre: 'Estacionamiento', name: 'parking'},
    {nombre: 'Calle Cerrada', name: 'streetclose'},
    {nombre: 'Vigilante', name: 'guard'}
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

  $scope.availableSearchParams = [
    { key: "address", name: "Direccion", placeholder: " " },
    { key: "rooms", name: "Cuartos", placeholder: " ", allowMultiple: true, restrictToSuggestedValues: true, suggestedValues: ['1', '2', '3']},
  ];


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
    if(app.priorities){
      app.priorities = false;
    } else {
      app.priorities = true;
    }
  }

  $scope.ereasePriority = function(index){
    app.leftPercentaje = 100;
    var option = {
      nombre: app.priorityGoal[index].nombre,
      name: app.priorityGoal[index].name
    }

    app.availableOptions.push(option);
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
      app.priorityGoal[i].percentaje = Math.trunc(100/app.priorityGoal.length);
      app.leftPercentaje = app.leftPercentaje - app.priorityGoal[i].percentaje;
    }

    if (app.leftPercentaje == 0) {
      $scope.updateGraph();
    }

  }

  app.addGoal = function() {
    var goal = {};
    var data = {};
    var index = 0;
    app.leftPercentaje = 100;
    goal.nombre = app.prioritySelected;
    data.label = app.prioritySelected;
    data.value = 0;
    $scope.myDataSource.data.push(data);

    if (app.prioritySelected !== '--Seleccione--') {
      if (app.prioritySelected == 'Baños'|| app.prioritySelected == 'Cuartos' || app.prioritySelected == 'Estacionamiento') {
        goal.value = app.priorityInputB;
      } else if (app.prioritySelected == 'Calle Cerrada'|| app.prioritySelected == 'Vigilante') {
        goal.value = app.priorityInputC;
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
      app.priorityGoal[i].percentaje = Math.trunc(100/app.priorityGoal.length);
      app.leftPercentaje = app.leftPercentaje - app.priorityGoal[i].percentaje;
    }

    if (app.leftPercentaje == 0) {
      $scope.updateGraph();
    }

    app.availableOptions.splice(index, 1);
    app.prioritySelected = '--Seleccione--';
    app.priorityInputA = '';
    app.priorityInputB = 0;
    app.priorityInputC = 'Si';
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
      center: {lat: 10.4806, lng: -66.9036},
      zoom: 16
    });

    app.map.polyArray = [];

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

    var cslcCoords = [
      new google.maps.LatLng(10.495180687387377, -66.8445311486721),
      new google.maps.LatLng(10.495346839528478, -66.84439167380333),
      new google.maps.LatLng(10.495845295416235, -66.84455260634422),
      new google.maps.LatLng(10.49594551396333, -66.84424683451653),
      new google.maps.LatLng(10.49591122867455, -66.84423878788948),
      new google.maps.LatLng(10.495995623224701, -66.84401616454124),
      new google.maps.LatLng(10.49608792973755, -66.8438820540905),
      new google.maps.LatLng(10.49617232423947, -66.84358432888985),
      new google.maps.LatLng(10.496188148206022, -66.84335365891457),
      new google.maps.LatLng(10.496177598895082, -66.84318736195564),
      new google.maps.LatLng(10.49550507957989, -66.84320345520973),
      new google.maps.LatLng(10.495399586221275, -66.84315785765648),
      new google.maps.LatLng(10.495383762214377, -66.84353604912758),
      new google.maps.LatLng(10.495370575541353, -66.84398666024208),
      new google.maps.LatLng(10.495143764677229, -66.84448823332787)
    ];
    var Cslc = new google.maps.Polygon({
      paths: cslcCoords,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      zonetype: 'E'
    });
    Cslc.setMap(app.map);
    app.map.polyArray.push(Cslc);

    var ArufloCoords = [
      new google.maps.LatLng(10.490702457965472, -66.84556514024734),
      new google.maps.LatLng(10.49072355696042, -66.84566169977188),
      new google.maps.LatLng(10.490987294276058, -66.84566169977188),
      new google.maps.LatLng(10.49088179937678, -66.84502333402634),
      new google.maps.LatLng(10.490639160971948, -66.8450340628624),
      new google.maps.LatLng(10.490648412071813, -66.84510899965579),
      new google.maps.LatLng(10.490570589214355, -66.84510916471481),
      new google.maps.LatLng(10.490549490208961, -66.8450179696083),
      new google.maps.LatLng(10.490285752520169, -66.84504479169846),
      new google.maps.LatLng(10.490385972868388, -66.84560269117355),
      new google.maps.LatLng(10.490612787220831, -66.84562548995018),
      new google.maps.LatLng(10.490618061971235, -66.84556648135185)
    ];
    var ArufloCentral = new google.maps.Polygon({
      paths: ArufloCoords,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      zonetype: 'P'
    });
    ArufloCentral.setMap(app.map);
    app.map.polyArray.push(ArufloCentral);

    var ClinicaCoord = [
      new google.maps.LatLng(10.494840470819938, -66.84543505311012),
      new google.maps.LatLng(10.494429045633824, -66.84606000781059),
      new google.maps.LatLng(10.494239156901802, -66.8461699783802),
      new google.maps.LatLng(10.49358509482147, -66.8462236225605),
      new google.maps.LatLng(10.493645753862914, -66.84517487883568),
      new google.maps.LatLng(10.49392795011671, -66.84512659907341),
      new google.maps.LatLng(10.493914763381596, -66.8455021083355),
      new google.maps.LatLng(10.494107289658205, -66.84549942612648),
      new google.maps.LatLng(10.494254980967272, -66.84512123465538),
      new google.maps.LatLng(10.494727065214308, -66.84534922242165)
    ];
    var Clinica = new google.maps.Polygon({
      paths: ClinicaCoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      zonetype: 'R3'
    });
    Clinica.setMap(app.map);
    app.map.polyArray.push(Clinica);

    var LaEstanciaCoords = [
      new google.maps.LatLng(10.495449695571104, -66.84801399707794),
      new google.maps.LatLng(10.493508611665307, -66.84794962406158),
      new google.maps.LatLng(10.493571908071765, -66.84670776128769),
      new google.maps.LatLng(10.494057180090902, -66.84670776128769),
      new google.maps.LatLng(10.494073004165655, -66.84627324342728),
      new google.maps.LatLng(10.4942708050319, -66.84623166918755),
      new google.maps.LatLng(10.494458056402065, -66.84611365199089),
      new google.maps.LatLng(10.494436957661787, -66.84633895754814),
      new google.maps.LatLng(10.495845295416235, -66.8465293943882)
    ];
    var LaEstancia = new google.maps.Polygon({
      paths: LaEstanciaCoords,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      zonetype: 'AE-C3-1'
    });
    LaEstancia.setMap(app.map);
    app.map.polyArray.push(LaEstancia);


    app.map.addListener('dragend', showArrays);
    app.map.addListener('zoom_changed', showArrays);



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
