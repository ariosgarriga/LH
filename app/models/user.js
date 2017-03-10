var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var titlize = require('mongoose-title-case');

var UserSchema = new Schema({
  name: { type: String, require: true},
  lastname: { type: String, require: true},
  birth: Date,
  gender: { type: String },
  city: { type: String },
  phone: { type: String, lowercase: true, require: true},
  email: { type: String, lowercase: true, require: true, unique: true},
  password: { type: String, require: true},
  permission: {type: String, require: true, default: 'user'}
});

UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, null, null, function(err, hash){
    if(err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.plugin(titlize, {
  paths: [ 'name', 'lastname' ]
});


UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
