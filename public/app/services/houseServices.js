angular.module('houseServices',[])

.factory('House', function($http){
  houseFactory = {};

  // House.create(regData)
  houseFactory.create = function(regData) {
    return $http.post('/api/houses', regData);
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
