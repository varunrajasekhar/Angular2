const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./product.model.js');
//const p = require('../server-models/products.model');



var UserCartSchema = new Schema({
  products: [product.schema]
});

module.exports = mongoose.model('user_cart', UserCartSchema);