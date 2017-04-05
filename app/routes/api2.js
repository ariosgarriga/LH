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


  return router;
}
