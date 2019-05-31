const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  price: Number

});

module.exports = mongoose.model('product', ProductSchema);