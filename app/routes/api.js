var User = require('../models/user.js');
var House = require('../models/house.js');
var Law = require('../models/laws.js');
var jwt = require('jsonwebtoken');
var secret = 'andresandcesco';
var _ = require('lodash');

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

  router.get('/search/:email', function(req, res){
    var searchUser = req.params.email;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {

      User.findOne({ email: searchUser }, function(err, user){
        if(err) throw err;
        if (!user) {
          res.json({ success: false, message: 'Usuario no encontrado'})
        } else {
          res.json({ success: true, user: user});
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
    house.township = req.body.township;
    house.rooms = req.body.rooms;
    house.bathrooms = req.body.bathrooms;
    house.medBathrooms = req.body.medBathrooms;
    house.dimensionsX = req.body.dimensionsX;
    house.dimensionsY = req.body.dimensionsY;
    house.floors = req.body.floors;
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
    house.type = req.body.type;
    house.pro_name = req.body.pro_name;
    house.pro_phone = req.body.pro_phone;
    house.pro_direction = req.body.pro_direction;
    house.pro_CI = req.body.pro_CI;
    house.pro_email = req.body.pro_email;
    house.pro_minPrice = req.body.pro_minPrice;
    house.pro_porcentaje = req.body.pro_porcentaje;
    house.pro_porcentajeColab = req.body.pro_porcentajeColab;
    house.pro_exclusive = req.body.pro_exclusive;
    house.pro_notes = req.body.pro_notes;
    house.near_places = req.body.near_places;

    if( req.body.address == null || req.body.address == '' || req.body.id_user == null || req.body.id_user == ''
      || req.body.price == null || req.body.price == ''){
      res.json({ success: false, message: 'No te olvides de colocar la dirección y el precio' });
    } else if (req.body.meters == null || req.body.meters == '' || req.body.consmeters == null || req.body.consmeters == '') {
      res.json({ success: false, message: 'No te olvides de colocar los metros cuadrados de terreno y construcción' });
    } else if (req.body.picture == null ) {
      res.json({ success: false, message: 'No te olvides de colocar la imagen principal' });
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
    console.log(req.body);
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
            if (mainUser.permission === 'admin' || mainUser.permission === 'moderator' || mainUser._id == house.id_user) {

              const out = {};
              _(req.body).forEach((value,key) => {
                  console.log(_.isEmpty(value) );
                  if (!_.isEmpty(value) || _.map(value, _.identity)){
                    out[key] = value;
                  } 
              });

              console.log(out);
              House.update({_id: editHouse}, out, function(err){
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

  router.put('/house/editShareHouse', function(req, res){
    var editHouse = req.body.house_id;
    var array = req.body.sharedUsers;
    console.log(array);
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
            if (mainUser.permission === 'admin' || mainUser.permission === 'moderator' || mainUser._id == house.id_user) {
              console.log();
              House.update({_id: editHouse}, {
                shared_users : array
              }, function(err){
                if (err) {
                  console.log(err);
                } else {
                  res.json({ success: true, message: 'Editado con Exito' });
                  console.log('exito');
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

  router.delete('/house/delete/:id', function(req, res){
    var deletedID = req.params.id;
    User.findOne({ email: req.decoded.email }, function(err, mainUser){
      if (err) throw err;
      if (!mainUser) {
        res.json({ success: false, message: 'No encontro usuario'})
      } else {
        House.findOne({_id: deletedID}, function(err, house){
          if (err) throw err;
          if (house.id_user == mainUser._id || mainUser.role == 'admin' || mainUser.role == 'moderator') {
            House.findOneAndRemove({_id: deletedID}, function(err, house){
              if (err) throw err;
              res.json({ success: true });
            });
          }else {
            res.json({ success: false, message: 'No posee permiso para realizar esta acción'});
          }

        });


      }
    });
  });


  // LAWS ROUTES
  // =============




  return router;
}
