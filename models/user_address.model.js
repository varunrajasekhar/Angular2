const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.model');

var UserAddresschema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'User' },
  address: Object
});

module.exports = mongoose.model('user_address', UserAddresschema);