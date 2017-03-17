angular.module('userApp',
  ['appRoutes',
   'userControllers',
   'userServices',
   'ngAnimate',
   'mainController',
   'homeController',
   'authServices',
   'ngMaterial',
   'angular-filepicker',
   'managementController'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors');
})
.config(function (filepickerProvider) {
  filepickerProvider.setKey('AjiycxgH2TLYaAc3bZqOqz');
});
