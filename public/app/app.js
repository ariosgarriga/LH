angular.module('userApp',
  ['appRoutes',
   'userControllers',
   'userServices',
   'ngAnimate',
   'mainController',
   'homeController',
   'authServices',
   'houseControllers',
   'ngMaterial',
   'angular-filepicker',
   'angular-advanced-searchbox',
   'ui.bootstrap',
   'rzModule',
   'ng-fusioncharts',
   'managementController'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors');
})
.config(function (filepickerProvider) {
  filepickerProvider.setKey('AjiycxgH2TLYaAc3bZqOqz');
});
