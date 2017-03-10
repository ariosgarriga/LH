angular.module('userServices',[])

.factory('User', function($http){
  userFactory = {};

  // User.create(regData)
  userFactory.create = function(regData) {
    return $http.post('/api/users', regData);
  };

  //User.renewSession(email)
  userFactory.renewSession = function(email){
    return $http.get('/api/renewToken/'+email);
  };

  // User.getPermission()
  userFactory.getPermission = function(){
    return $http.get('/api/permission');
  };

  // User.getUsers()
  userFactory.getUsers = function(){
    return $http.get('/api/management');
  };

  // User.getUser(id);
  userFactory.getUser = function(id){
    return $http.get('/api/edit/'+id);
  };

  // User.deleteUser(email)
  userFactory.deleteUser = function(email){
    return $http.delete('/api/management/'+email);
  };

  // User.editUser(email);
  userFactory.editUser = function(user){
    return $http.put('/api/edit', user);
  };


  return userFactory;
});
