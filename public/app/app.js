angular.module('userApp',
  ['appRoutes',
   'userControllers',
   'userServices',
   'ngAnimate',
   'mainController',
   'homeController',
   'authServices',
   'ngMaterial',
   'managementController'])

  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
  });
