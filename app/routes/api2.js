var User = require('../models/user.js');
var House = require('../models/house.js');
var jwt = require('jsonwebtoken');
var secret = 'andresandcesco';

module.exports = function(router){

  // HOUSES API
  // ===============

  router.post('/houses', function(req, res){
    var house = new House();

    house.address = req.body.address;
    house.rooms = req.body.rooms;
    house.bathrooms = req.body.bathrooms;
    house.dimensionsX = req.body.dimensionsX;
    house.dimensionsY = req.body.dimensionsY;
    house.consmeters = req.body.consmeters;
    house.meters = req.body.meters;
    house.parking = req.body.parking;
    house.closestreet = req.body.closestreet;
    house.guard = req.body.guard;
    house.zonetype = req.body.zonetype;
    house.age = req.body.age;
    house.price = req.body.price;
    house.lat = req.body.lat;
    house.lon = req.body.lon;
    house.is_user = req.body.is_user;

    if(req.body.address == null || req.body.address == ''
      || req.body.zonetype == null || req.body.zonetype == ''
      || req.body.id_user == null || req.body.id_user == ''){
        res.json({ success: false, message: 'Hace falta la Direccion, el tipo de zona o el usuario' });
      } else {
        house.save(function(err){
          if (err) {
              res.json({ success: false, message: 'Hogar ya existente' });
          } else {
              res.json({ success: true, message: 'House Created!' });
          }
        });
      }
  });






  return router;
}
