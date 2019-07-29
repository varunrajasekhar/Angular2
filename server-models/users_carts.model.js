const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./products.model.js');
//const p = require('../server-models/products.model');



var UsersCartsSchema = new Schema({
  products: [product.schema]
});

module.exports = mongoose.model('users_carts', UsersCartsSchema);