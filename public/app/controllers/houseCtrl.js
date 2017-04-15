angular.module('houseControllers', ['userServices', 'houseServices'])

.controller('houseCtrl', function($http, $scope, $routeParams, $window, $location, $timeout, User, House) {

  var app = this;
  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(url) {
   slides.push({
     image: url,
     id: currIndex++
   });
  };

  app.initMap = function() {
    app.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: app.data.lat, lng: app.data.lng},
      zoom: 16,
      draggable: false,
      disableDoubleClickZoom: false,
      gestureHandling: "none",
      scrollwheel: false
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
  }


  House.getHouse($routeParams.id).then(function(data){
    if (data.data.success) {
      app.data = data.data.house;
      console.log(data.data.house);
      app.data.bathrooms = data.data.house.bathrooms.toString();
      app.data.rooms = data.data.house.rooms.toString();
      app.data.parking = data.data.house.parking.toString();
      $scope.addSlide(app.data.picture.url);
      if (app.data.morePictures) {
        for (var i = 0; i < app.data.morePictures.length; i++) {
          $scope.addSlide(app.data.morePictures[i].url);
        }
      }


    } else {
      $scope.errorMsg = data.data.message;
    }
  }).then(function(){
    app.initMap();
  });

})

.controller('editHouseCtrl', function($http, $scope, $routeParams, filepickerService, $window, $location, $timeout, User, House) {

  var app = this;
  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  $scope.superhero = {};
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(url) {
   slides.push({
     image: url,
     id: currIndex++
   });
  };

  app.initMap = function() {
    app.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: app.data.lat, lng: app.data.lng},
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
  }


  House.getHouse($routeParams.id).then(function(data){
    if (data.data.success) {
      app.data = data.data.house;
      console.log(data.data.house);
      app.data.bathrooms = data.data.house.bathrooms.toString();
      app.data.rooms = data.data.house.rooms.toString();
      app.data.parking = data.data.house.parking.toString();
      $scope.addSlide(app.data.picture.url);
      $scope.superhero.picture = data.data.house.picture;
      $scope.superhero.morePictures = data.data.house.morePictures;
      if (app.data.morePictures) {
        for (var i = 0; i < app.data.morePictures.length; i++) {
          $scope.addSlide(app.data.morePictures[i].url);
        }
      }


    } else {
      $scope.errorMsg = data.data.message;
    }
  }).then(function(){
    app.initMap();
  });

  app.editHouse = function(editData){
    app.errorMsg = false;
    app.successMsg = false;
    var houseObject = {};
    houseObject = editData;
    houseObject.lat = app.map.getCenter().lat();
    houseObject.lng = app.map.getCenter().lng();
    House.editHouse(houseObject).then(function(data){
      if (data.data.success) {
        app.successMsg = data.data.message;
        $timeout(function(){
          app.editForm.$setPristine();
          app.editForm.$setUntouched();
          $window.location.reload();
          app.successMsg = false;
        }, 2000);
      } else {
        app.errorMsg = data.data.message;
      }
    })


  };

  $scope.upload = function(){
    filepickerService.pick(
      {
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'IMAGE_SEARCH',
        language: 'es'
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        $scope.superhero.picture = Blob;
        app.data.picture = Blob;

        $scope.$apply();
      }
    );
  };

  $scope.uploadMultiple = function(index){
    filepickerService.pick(
      {
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
        openTo: 'IMAGE_SEARCH',
        language: 'es'
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        $scope.superhero.morePictures[index] = Blob;
        app.data.morePictures[index] = Blob;

        $scope.$apply();
      }
    );
  };

});
