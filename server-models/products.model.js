const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  product_name: String,
  product_price: Number,
  product_imageUrl: String,
  product_stockStatus: Boolean,
  product_description: String,
  product_rating: Number,
  product_category:String,
  product_id: Number
});

module.exports = mongoose.model('products', ProductSchema);