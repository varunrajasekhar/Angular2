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


var EmployeeModelSchema = new Schema({
  // _id: Number,
  title: String,
  firstName: String,
  lastName: String,
  address:  { type: Schema.Types.ObjectId, ref: 'emp_address_collections', required: true },
  designation: Object,
  email: String,
  password: { type: String, required: true},
  confirmPassword: String
});

var EmployeeAddressSchema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'emp_details_collections' },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: {
    type: Number,
    required: true
  }
});

const EmployeeDetailsCollection = mongoose.model('emp_details_collections', EmployeeModelSchema);
const EmployeeAddressCollection = mongoose.model('emp_address_collections', EmployeeAddressSchema);

// Get All Employees
router.get('/empsData', (req, res, next) => {
  EmployeeDetailsCollection.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

//Get One Employee Information based on Id
router.get('/empsData/:id', (req, res, next) => {
  EmployeeDetailsCollection.find({_id: mongoose.Types.ObjectId(req.params.id)}, (err, data) => {
    if (err) {
      res.send(err);
    }
  
    res.json(data);
  });
});

// Get One Employee Information by Name or email
router.get('/empsData/:name/:id', (req, res, next) => {
  console.log(req.params);
  EmployeeDetailsCollection.find({title: (req.params.name)}).populate('address').exec((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
  // , (err, data) => {
  //   if (err) {
  //     res.send(err);
  //   }
  
  //   res.json(data);
  // });
});

// Delete an employee
router.delete('/empsRemoveData', (req, res, next) => {
  EmployeeDetailsCollection.find({_id: parseInt(req.params.id)}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

// Post or Create new data
router.post('/postEmpsData', (req, res, next) => {
  var responseObject = {};
  responseObject.success = false;
  var empAddress = new EmployeeAddressCollection(req.body.address);
  
  empAddress.save((err) => {
    if (err) {
      return res.json(err);
    }
    
    var tempEmpDetails = req.body;
    
    tempEmpDetails.address = empAddress._id;

    var empDetails = new EmployeeDetailsCollection(tempEmpDetails);

    empDetails.save((err) => {
      if (err) {
        logger.error(err);
        return res.json(err);
      }
      responseObject.success = true;
      res.json(responseObject);
    })
  });

  
});

// Update existing Employee data
router.put('/updateEmpsData', (req, res, next) => {
  
  EmployeeDetailsCollection.findOneAndReplace({_id: req.body._id}, req.body, (err) => {
    res.send(err);
  });
  
});

// Get employee Quiz questions
// Post answers and calculate score
// Update Quiz answers or score

module.exports = router;
