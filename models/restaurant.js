var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    name: String,
    type: String,
    rating: Number,
    image: String,
    website: String
  });

 var restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;