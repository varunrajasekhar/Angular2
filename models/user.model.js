const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserAddress = require('../models/user_address.model');

var UserSchema = new Schema({
  title:  {
    type: String,
    required: false
  },
  firstName: {
    type: Object,
    required: true
  },
  lastName: {
    type: Object,
    required: true
  },
  designation: {
    type: Object,
    required: false
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: 'UserAddress'
  },
  userOrders: { 
    type: Schema.Types.ObjectId,
    ref: 'UserOrders'
  },
  phoneNumber: {
    type: String,
    required: false,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number format!`
    }
  },
  password: {
    type: String,
    required: false
  }  
});

module.exports = mongoose.model('user_details', UserSchema);