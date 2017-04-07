var User = require('../models/user.js');
var House = require('../models/house.js');

module.exports = function(router){

  router.get('/houses', function(req, res){
    House.find({}, function(err, houses){
      if(err) throw err;
      if (!houses) {
        res.json({ success: false, message: 'No hay Hogares en el Sistema :('})
      } else {
        res.json({ success: true, houses: houses });
      }
    });
  });

  router.get('/house/:id', function(req, res){
    var viewHouse = req.params.id;
    House.findOne({_id : viewHouse}, function(err, house){
      console.log(house);
      if(err) throw err;
      if (!house) {
        res.json({ success: false, message: 'No se consiguio el Hogar :('})
      } else {
        res.json({ success: true, house: house });
      }
    });
  });

  return router;
}
