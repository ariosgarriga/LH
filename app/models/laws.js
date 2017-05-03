var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LawSchema = new Schema({
  name: {type: String},
  type: {type: String},
  ordinance: {type: String},
  article: {type: String}
});

module.exports = mongoose.model('Law', LawSchema);
