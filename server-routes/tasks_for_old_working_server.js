const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// var log4js = require('log4js');
// var logger = log4js.getLogger();
// logger.level = 'debug';

require('mkdirp').sync('logs') // your log directory

var log4js = require('log4js')

log4js.configure({
  appenders: { error: { type: 'file', filename: 'error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } },
  replaceConsole: true
})

var logger = log4js.getLogger('error');

logger.level = 'debug';


//connect to mongodb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function() {
  console.log('connection has been made');
}).on('error', function(error) {
  console.log('connection error', error);
});

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  // _id: Number,
  title: String,
  firstName: String,
  lastName: String,
  address:  { type: Schema.Types.ObjectId, ref: 'user_address_collections', required: true },
  designation: String,
  email: String,
  password: { type: String, required: true},
  confirmPassword: String
});

var UserAddressSchema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'user_details_collections' },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: {
    type: Number,
    required: true
  }
});

ProductTypesSchema = new Schema({
  productType: String,

})

//All Products Schema
var ProductsSchema = new Schema({
  _creator : {type: Schema.Types.ObjectId, ref: 'product_type_collections'},
  descriptionList: Array,
  ingredientsList: Array,
  price: {
    type: Schema.Types.Decimal128
  },
  productType: {type: String, ref:'product_type_collections'}
})

const UserDetailsCollection = mongoose.model('user_details_collections', UserModelSchema);
const UserAddressCollection = mongoose.model('user_address_collections', UserAddressSchema);

// Get All Employees
router.get('/userData', (req, res, next) => {
  UserDetailsCollection.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

//Get One Employee Information based on Id
router.get('/userData/:id', (req, res, next) => {
  UserDetailsCollection.find({_id: mongoose.Types.ObjectId(req.params.id)}, (err, data) => {
    if (err) {
      res.send(err);
    }
  
    res.json(data);
  });
});

// Get One Employee Information by Name or email
router.get('/userData/:name/:id', (req, res, next) => {
  UserDetailsCollection.find({title: (req.params.name)}).populate('address').exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

// Delete an employee
router.delete('/userRemoveData', (req, res, next) => {
  UserDetailsCollection.find({_id: parseInt(req.params.id)}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

// Post or Create new data
router.post('/postUsersData', (req, res, next) => {
  var responseObject = {};
  responseObject.success = false;
  
  var userAddress = new UserAddressCollection(req.body.address);

  // if(Object.keys(req.body.address).length > 0) {
    userAddress.save((err) => {
      if (err) {
        return res.json(err);
      }
      
      var tempUserDetails = req.body;
      
      tempUserDetails.address = userAddress._id;
  
      var userDetails = new UserDetailsCollection(tempUserDetails);
  
      userDetails.save((err) => {
        if (err) {
          logger.error(err);
          return res.json(err);
        }
        responseObject.success = true;
        res.json(responseObject);
      })
    });
    

  // } else {
  //   responseObject.success = false;
  //   responseObject.error = "Address Object is requried"
  //   res.json(responseObject);
  // }
  
  

  
});

// Update existing Employee data
router.put('/updateUsersData', (req, res, next) => {
  
  UserDetailsCollection.findOneAndReplace({_id: req.body._id}, req.body, (err) => {
    res.send(err);
  });
  
});

// Get employee Quiz questions
// Post answers and calculate score
// Update Quiz answers or score

module.exports = router;
