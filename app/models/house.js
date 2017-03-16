var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HouseSchema = new Schema({
  address: {type: String},
  rooms: {type: Number},
  bathrooms: {type: Number},
  dimensionsY: {type: Number},
  dimensionsX: {type: Number},
  dimensionsZ: {type: Number},
  consmeters: {type: Number},
  meters: {type: Number},
  parking: {type: Number},
  streetclose: {type: Boolean},
  guard: {type: Boolean},
  zonetype : {type: String},
  age: {type: Number},
  price: {type: Number},
  lat: {type: Number},
  lon: {type: Number},
  id_user: {type: String}
});

module.exports = mongoose.model('House', HouseSchema);
