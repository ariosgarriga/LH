var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HouseSchema = new Schema({
  address: {type: String},
  township: {type: String},
  rooms: {type: Number},
  bathrooms: {type: Number},
  dimensionsY: {type: Number},
  dimensionsX: {type: Number},
  floors: {type: Number},
  consmeters: {type: Number},
  meters: {type: Number},
  parking: {type: Number},
  streetclose: {type: Boolean},
  guard: {type: Boolean},
  zonetype : {type: String},
  type : {type: String},
  age: {type: Number},
  price: {type: Number},
  lat: {type: Number},
  lng: {type: Number},
  picture: {type: Schema.Types.Mixed, required: true},
  morePictures: Schema.Types.Mixed,
  id_user: {type: String},
  pro_name: {type: String},
  pro_phone: {type: String},
  pro_direction: {type: String},
  pro_CI: {type: String},
  pro_email: {type: String},
  pro_minPrice: {type: Number},
  pro_porcentaje: {type: Number},
  pro_porcentajeColab: {type: Number},
  pro_exclusive: {type: Boolean},
  pro_notes: {type: String},
  near_places: {type: String},
  shared_users: {type: Schema.Types.Mixed, default: []},
  shared_fields: {type: Schema.Types.Mixed, default: []}

});

module.exports = mongoose.model('House', HouseSchema);
