var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'app/views/pages/home.html',
    controller: 'homeCtrl',
    controllerAs: 'home'
  })
  .when('/register', {
    templateUrl: 'app/views/pages/users/register.html',
    controller: 'regCtrl',
    controllerAs: 'register',
    authenticated: false
  })
  .when('/login', {
    templateUrl: 'app/views/pages/users/login.html',
    authenticated: false
  })
  .when('/logout', {
    templateUrl: 'app/views/pages/users/logout.html',
    authenticated: true
  })
  .when('/profile', {
    templateUrl: 'app/views/pages/users/profile.html',
    authenticated: true
  })
  .when('/management', {
    templateUrl: 'app/views/pages/management/management.html',
    controller: 'managementCtrl',
    controllerAs: 'management',
    authenticated: true,
    permission:['admin', 'moderator']
  })
  .when('/edit/:id', {
    templateUrl: 'app/views/pages/management/edit.html',
    controller: 'editCtrl',
    controllerAs: 'edit',
    authenticated: true
  })
  .when('/house/:id', {
    templateUrl: 'app/views/pages/houses/house-profile.html',
    controller: 'houseCtrl',
    controllerAs: 'house',
    authenticated: true
  })
  .when('/house/edit/:id', {
    templateUrl: 'app/views/pages/houses/edit.html',
    controller: 'editHouseCtrl',
    controllerAs: 'editHouse',
    authenticated: true
  })


  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });

})

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.run(['$rootScope', 'Auth', '$location', 'User', function($rootScope, Auth, $location, User){

  $rootScope.$on('$routeChangeStart', function(event, next, current){

    if(next.$$route !== undefined){
      if (next.$$route.authenticated == true) {
        if (!Auth.isLoggedIn()) {
          event.preventDefault();
          $location.path('/');
        }else if (next.$$route.permission) {
          User.getPermission().then(function(data){
            if(next.$$route.permission[0] !== data.data.permission){
              if(next.$$route.permission[1] !== data.data.permission){
                event.preventDefault();
                $location.path('/');
              }
            }
          });

        }

      } else if (next.$$route.authenticated == false) {
        if (Auth.isLoggedIn()) {
          event.preventDefault();
          $location.path('/profile');
        }
      }
    }


  });
}]);
