angular.module('mainController',['authServices', 'userServices'])

.controller('mainCtrl', function($location, $scope, $timeout, Auth, $rootScope, $interval, $window, $route, User, AuthToken) {
  var app = this;

  app.loadme = false;

  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };


  app.checkSession = function(){
    if (Auth.isLoggedIn()) {
      app.checkingSession = true;
      var interval = $interval(function(){
        var token = $window.localStorage.getItem('token');
        if (token === null) {
          $interval.cancel(interval);
        } else {
          self.parseJwt = function(token){
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse($window.atob(base64));
          }
          var expireTime = self.parseJwt(token);
          var timeStamp = Math.floor(Date.now() / 1000);
          // console.log(expireTime.exp);
          // console.log(timeStamp);
          var timeCheck = expireTime.exp - timeStamp;
          // console.log('--> '+timeCheck);
          if (timeCheck <= 300) {
            // console.log('Token ha expirado');
            showModal(1);
            $interval.cancel(interval);
          }
        }
      }, 2000);

    }

  };

  app.checkSession();

  var showModal = function(option){
    app.choiceMade = false;
    app.modalHeader = undefined;
    app.modalBody = undefined;
    app.hideButton = false;

    if (option === 1) {
      app.modalHeader = "Se le esta agotando el tiempo";
      app.modalBody = "Su sesion se cerrara en 10 minutos, desea reanudarla?";
      $("#myModal").modal({backdrop: "static"});

    } else if (option === 2) {
      app.hideButton = true;
      app.modalHeader = "Cerrada Sesion";
      $("#myModal").modal({backdrop: "static"});
      $timeout(function () {
        Auth.logout();
        $location.path('/');
        hideModal();
        $window.location.reload();
      }, 2000);
    }
    $timeout(function () {
      if (!app.choiceMade) {
        console.log("Sesion Cerrada!!");
        hideModal();
      }
    }, 4000);

  };

  app.renewSession = function(){
    app.choiceMade = true;
    User.renewSession(app.email).then(function(data){
      if (data.data.success) {
        AuthToken.setToken(data.data.token);
        app.checkSession();
      } else {
        app.modalBody = data.data.message;
      }
    });
    hideModal();
  };

  app.endSession = function() {
    app.choiceMade = true;
    hideModal();
    $timeout(function(){
      showModal(2);
    }, 1000);
  };

  var hideModal = function() {
    $("#myModal").modal('hide');
  };

  $rootScope.$on('$routeChangeStart', function(){
    if (!app.checkSession) {
      app.checkSession();
    }

    if (Auth.isLoggedIn()) {
      app.isLoggedIn = true;
      Auth.getUser().then(function(data){
        app.name = data.data.name;
        app.email = data.data.email;
        app.id = data.data.id;
        User.getPermission().then(function(data){
          if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
            app.authorized = true;
            app.loadme = true;
          } else {
            app.loadme = true;
          }
        });
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
  });



  this.doLogin = function(loginData){
    app.loading = true;
    app.errorMsg = false;
    app.successMsg = false;

    Auth.login(app.loginData).then(function(data){
      if (data.data.success) {
        app.loading = false;
        //Create Success Message
        app.successMsg = data.data.message + " ...Redireccionando";
        //Redirect to home page
        $timeout(function () {
          $location.path('/');
          app.loginData = '';
          app.successMsg = false;
          app.checkSession();
        }, 2000);

      } else {
        //Create error message
        app.loading = false;
        app.errorMsg = data.data.message;
      }
    });
  };

  app.logout = function(){
    showModal(2);
  };

});
