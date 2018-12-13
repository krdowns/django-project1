var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  message: String,
  spouse: String,
  parentNames: String,
  childrenNames: String,
  profileImage: String,
  currentCity: String,
  homeTown: String,
  });

 var user = mongoose.model('user', userSchema);

module.exports = user;