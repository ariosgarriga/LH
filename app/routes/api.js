var User = require('../models/user.js');
var House = require('../models/house.js');
var Law = require('../models/laws.js');
var jwt = require('jsonwebtoken');
var secret = 'andresandcesco';

module.exports = function(router){
  // USER REGISTRATION ROUTE
  // http://localhost:8080/api/users
  router.post('/users', function(req, res){
    var user = new User();

    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.birth = req.body.birth;
    user.gender = req.body.gender;
    user.city = req.body.city;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = req.body.password;

    if(req.body.name == null || req.body.name == ''
      || req.body.lastname == null || req.body.lastname == ''
      || req.body.phone == null || req.body.phone == ''
      || req.body.email == null || req.body.email == ''
      || req.body.password == null || req.body.password == ''){
        res.json({ success: false, message: 'Hace falta el nombre, apellido, fecha, telefono, email o contraseña' });
      } else {
        user.save(function(err){
          if (err) {
              res.json({ success: false, message: 'Email already exist' });
          } else {
              res.json({ success: true, message: 'User Created!' });
          }
        });
      }
  });

  // USER LOGIN ROUTE
  // http://localhost:8080/api/authenticate
  router.post('/authenticate', function(req,res){
    User.findOne({ email: req.body.email }).select('email name password _id').exec(function(err,user){
      if(err) throw err;

      if(!user){
        res.json({ success: false, message: 'Email Incorrecto'});
      } else if(user){
        if (req.body.password) {
          var validPassword = user.comparePassword(req.body.password);
        } else {
          res.json({ success: false, message: 'No colocó Contraseña'});
        }

        if (!validPassword) {
          res.json({ success: false, message: 'Contraseña Incorrecta'});
        } else {
          var token = jwt.sign({email: user.email, name: user.name, _id: user._id }, secret, { expiresIn:'365 days'});
          res.json({ success: true, message: 'Exito!', token: token });
        }
      }
    });
  });

  router.use(function(req, res, next){
    var token = req.body.token || req.body.query || req.headers['x-access-token'];

    if (token) {
      // verify token
      jwt.verify(token,secret, function(err, decoded){
        if (err) {
          res.json({success: false, message: 'Token invalido'})
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({success: false, message: 'No se encontro ningun Token'})
    }
  });


  router.post('/me', function(req, res){
    res.send(req.decoded);
  });

  router.get('/renewToken/:email', function(req,res) {
    console.log("--> "+req.params.email);
    User.findOne({ email: req.params.email }).select().exec(function(err, user) {
      if(err) throw err;
      if(!user){
        res.json({succes: false, message: "No se consiguio usuario"});
      } else {
        var newToken = jwt.sign({email: user.email, name: user.name, lastname: user.lastname}, secret, { expiresIn:'24h'});
        res.json({ success: true, token: newToken });
      }
    });
  });

  router.get('/permission', function(req, res){
    User.findOne({ email: req.decoded.email }, function(err, user){
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {
        res.json({ success: true, permission: user.permission })
      }
    });
  });

  router.get('/management', function(req, res){
    User.find({}, function(err, users){
      if(err) throw err;
      User.findOne({ email: req.decoded.email }, function(err, mainUser){
        if (err) throw err;
        if (!mainUser) {
          res.json({ success: false, message: 'No encontro usuario'})
        } else {
          if (mainUser.permission === 'admin' || mainUser.permission === 'moderator') {
            if (!users) {
              res.json({ success: false, message: 'Usuarios no encontrados'})
            } else {
              res.json({ success: true, users: users, permission: mainUser.permission });
            }

          } else {
              res.json({ success: false, message: 'No tiene el permiso necesario'})
          }
        }
      });
    });
  });

  router.delete('/management/:email', function(req, res){
    var deletedEmail = req.params.email;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {
        if (mainUser.permission !== 'admin') {
          res.json({ success: false, message: 'No tiene el permiso necesario para realizar esta accion'})

        } else {
          User.findOneAndRemove({email: deletedEmail}, function(err, user){
            if (err) throw err;
            res.json({ success: true });
          });
        }
      }
    });
  });

  router.get('/edit/:id', function(req, res){
    var editUser = req.params.id;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {

      User.findOne({ _id: editUser }, function(err, user){
        if(err) throw err;
        if (!user) {
          res.json({ success: false, message: 'Usuarios no encontrados'})
        } else {
          if (mainUser.permission === 'admin' || mainUser.permission === 'moderator' || mainUser.email === user.email ) {
            House.find({ id_user: user._id }, function(err, houses){

              if(err) throw err;
              if(!houses){
                res.json({ success: false, message: 'No posee publicaciones', user: user});

              } else {
                res.json({ success: true, user: user, houses: houses});
              }
            });
          } else {
            res.json({success: false, message: 'No posee permiso para realizar esta accion :('});
          }
        }
      });

      }
    });
  });

  router.put('/edit', function(req, res){
    var editUser = req.body._id;
    var newUser =req.body;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {
        User.findOne({ _id: editUser }, function(err, user){
          if(err) throw err;
          if (!user) {
            res.json({ success: false, message: 'Usuario no encontrado'})
          } else {
            if (mainUser.permission === 'admin' || mainUser.permission === 'moderator' || mainUser.email === user.email) {
              User.update({_id: editUser}, {
                name: req.body.name,
                lastname: req.body.lastname,
                birth: req.body.birth,
                gender: req.body.gender,
                city: req.body.city,
                phone: req.body.phone,
                email: req.body.email,
                permission: req.body.permission
              }, function(err){
                if (err) {
                  console.log(err);
                } else {
                  res.json({ success: true, message: 'El usuario ha sido actualizado' });
                }
              });
            } else {
              res.json({success: false, message: 'No posee permiso para realizar esta accion'});
            }
          }
        });

      }
    });
  });

  // HOUSE ROUTES
  // ============

  router.post('/houses', function(req, res){
    var house = new House();

    house.address = req.body.address;
    house.rooms = req.body.rooms;
    house.bathrooms = req.body.bathrooms;
    house.dimensionsX = req.body.dimensionsX;
    house.dimensionsY = req.body.dimensionsY;
    house.dimensionsZ = req.body.dimensionsZ;
    house.meters = req.body.meters;
    house.consmeters = req.body.consmeters;
    house.parking = req.body.parking;
    house.streetclose = req.body.streetclose;
    house.guard = req.body.guard;
    house.age = req.body.age;
    house.price = req.body.price;
    house.lat = req.body.lat;
    house.lng = req.body.lng;
    house.picture = req.body.picture;
    house.morePictures = req.body.morePictures;
    house.id_user = req.body.id_user;
    house.zonetype = req.body.zonetype;

    if(req.body.address == null || req.body.address == ''
      || req.body.id_user == null || req.body.id_user == ''){
        res.json({ success: false, message: 'Hace falta algunos datos' });
      } else {
        house.save(function(err){
          if (err) {
            res.json({ success: false, message: 'No se pudo crear el hogar'});
          } else {
            res.json({ success: true, message: 'Hogar Creado!' });
          }
        });
      }
  });

  router.put('/house/edit', function(req, res){
    var editHouse = req.body._id;
    var newHouse =req.body;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {
        House.findOne({ _id: editHouse }, function(err, house){
          if(err) throw err;
          if (!house) {
            res.json({ success: false, message: 'Hogar no encontrado'})
          } else {
            if (mainUser.permission === 'admin' || mainUser.permission === 'moderator' || mainUser._id === house.id_user) {
              House.update({_id: editHouse}, {
                address : req.body.address,
                rooms : req.body.rooms,
                bathrooms : req.body.bathrooms,
                dimensionsX : req.body.dimensionsX,
                dimensionsY : req.body.dimensionsY,
                dimensionsZ : req.body.dimensionsZ,
                meters : req.body.meters,
                consmeters : req.body.consmeters,
                parking : req.body.parking,
                streetclose : req.body.streetclose,
                guard : req.body.guard,
                age : req.body.age,
                price : req.body.price,
                lat : req.body.lat,
                lng : req.body.lng,
                picture : req.body.picture,
                morePictures : req.body.morePictures,
                zonetype : req.body.zonetype
              }, function(err){
                if (err) {
                  console.log(err);
                } else {
                  res.json({ success: true, message: 'El hogar ha sido actualizado' });
                }
              });
            } else {
              res.json({success: false, message: 'No posee permiso para realizar esta accion'});
            }
          }
        });

      }
    });
  });

  // LAWS ROUTES
  // =============




  return router;
}
