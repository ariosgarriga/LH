angular.module('houseServices',[])

.factory('House', function($http){
  houseFactory = {};

  // House.create(regData)
  houseFactory.create = function(regData) {
    return $http.post('/api/houses', regData);
  };

  // House.editShareUsers(users)
  houseFactory.editShareUsers = function(users) {
    return $http.put('/api/house/editShareHouse', users);
  };

  // House.deleteHouse(id)
  houseFactory.deleteHouse = function(id){
    return $http.delete('/api//house/delete/'+id);
  };

  // House.getHouses();
  houseFactory.getHouses = function(){
    return $http.get('/api2/houses');
  }

  houseFactory.getHouse = function(id){
    return $http.get('/api2/house/'+id);
  }

  houseFactory.editHouse = function(house){
    return $http.put('/api/house/edit', house);
  }

  return houseFactory;
});
