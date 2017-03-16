angular.module('houseServices',[])

.factory('House', function($http){
  houseFactory = {};

  // House.create(regData)
  houseFactory.create = function(regData) {
    return $http.post('/api/houses', regData);
  };

  return houseFactory;
});
