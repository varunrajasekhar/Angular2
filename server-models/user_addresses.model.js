const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user_details = require('./users_details.model');

var UserAddressSchema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'user_details' },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: {
    type: Number,
    required: true
  }
}, {collecion: 'user'});

module.exports = mongoose.model('user_addresses', UserAddressSchema);