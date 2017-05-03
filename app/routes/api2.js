var User = require('../models/user.js');
var House = require('../models/house.js');
var Law = require('../models/laws.js');

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
      if(err) throw err;
      if (!house) {
        res.json({ success: false, message: 'No se consiguio el Hogar :('})
      } else {
        Law.find({ name : house.zonetype }, function(err, laws){
          if(err) throw err;
          if (!laws) {
            res.json({ success: false, message: 'No se consiguio ninguna ley'})
          } else {

            res.json({ success: true, house: house, laws: laws });
          }
        });
      }
    });
  });

  router.get('/law/:name', function(req, res){
    var name = req.params.name;
    Law.find({ name : name }, function(err, laws){
      if(err) throw err;
      if (!laws) {
        res.json({ success: false, message: 'No se consiguio ninguna ley'})
      } else {
        res.json({ success: true, house: laws });
      }
    });
  });

  router.post('/law', function(req, res){
    var law = new Law();

    law.name = req.body.name;
    law.type = req.body.type;
    law.ordinance = req.body.ordinance;
    law.article = req.body.article;

    if(req.body.name == null || req.body.name == ''
      || req.body.type == null || req.body.type == ''
      || req.body.ordinance == null || req.body.ordinance == ''
      || req.body.article == null || req.body.article == ''){
        res.json({ success: false, message: 'Hace falta algunos datos' });
      } else {
        law.save(function(err){
          if (err) {
            res.json({ success: false, message: 'No se pudo agregar la ley'});
          } else {
            res.json({ success: true, message: 'Ley Agregada a la lista :)!' });
          }
        });
      }
  });

  return router;
}
