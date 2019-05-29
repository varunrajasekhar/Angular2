const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user_details = require('../server-models/user.model');

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
});

module.exports = mongoose.model('user_address', UserAddressSchema);