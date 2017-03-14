angular.module('managementController',[])

.controller('managementCtrl', function(User, $scope){
  var app = this;
  app.loading = true;
  app.accessDenied = true;
  app.editAccess = false;
  app.deleteAccess = false;

  app.limit = 5;


  function getUsers() {
    User.getUsers().then(function(data){
      if (data.data.success) {
        if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
          app.users = data.data.users;
          app.loading = false;
          app.accessDenied = false;
          if (data.data.permission === 'admin') {
            app.editAccess = true;
            app.deleteAccess = true;
          } else if (data.data.permission === 'moderator') {
            app.editAccess = true;
          }
        } else {
          app.errorMsg = 'No tiene el permiso necesario';
          app.loading = false;
        }
      } else {
        app.errorMsg = data.data.message;
        app.loading = false;
      }
    });
  };

  getUsers();

  app.showMore = function(number){
    app.errorShowMore = false;
    if (number>0) {
      app.limit = number;
    } else {
      app.errorShowMore = "Ingrese un numero valido";
    }
  };

  app.showAll = function(){
    app.limit = undefined;
    app.errorShowMore = false;
  };

  app.deleteUser = function(email){
    User.deleteUser(email).then(function(data){
      if (data.data.success) {
        getUsers();
      } else {
        app.errorShowMore = data.data.message;
      }
    })
  };

  app.search = function(searchKeyword, number){

    if (searchKeyword) {
      if (searchKeyword.length > 0) {
        app.limit = 0;
        $scope.searchFilter = searchKeyword;
        app.limit = number;

      } else {
        $scope.searchFilter = undefined;
        app.limit = 0;
      }
    } else {
      $scope.searchFilter = undefined;
      app.limit = 0;
    }
  };

  app.clear = function(){
    $scope.number = 'Clear';
    app.limit = 0;
    $scope.searchKeyword = undefined;
    $scope.searchFilter = undefined;
    app.errorShowMore = false;
  };


})

.controller('editCtrl', function($scope, $routeParams, User, $timeout, $window){

  var app = this;
  $scope.nameTab = "active";
  app.phase1 = true;
  app.roleEdit = true;


  User.getUser($routeParams.id).then(function(data){
    if (data.data.success) {
      $scope.editData = data.data.user;
      $scope.editData.birth = new Date(data.data.user.birth);
      if (data.data.user.permission === 'admin') {
        app.roleEdit = false;
      }
    } else {
      $scope.errorMsg = data.data.message;
    }
  });

  app.editUser = function(editData){
    app.errorMsg = false;
    app.successMsg = false;
    var userObject = {};
    userObject = $scope.editData;
    User.editUser(userObject).then(function(data){
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

});
