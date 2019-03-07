const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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
  _id: Number,
  title: String,
  name: Object,
  address: Object,
  designation: Object
});

const EmployeeDetailsCollection = mongoose.model('emp_details_collections', EmployeeModelSchema);

// Get All Employees
router.get('/empsData', (req, res, next) => {
  EmployeeDetailsCollection.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
});

// Get One Employee Information based on Id
router.get('/empsData/:id', (req, res, next) => {
  EmployeeDetailsCollection.find({_id: parseInt(req.params.id)}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
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
  res.send(req.body);
  console.log(req.body);
  // EmployeeDetailsCollection.insertMany([], function(err) {
  //   if (err) {
  //     res.send(err.errmsg);
  //   }
  //   res.json([{_id:54},{_id:67}]);
  // });
    
});

// Update existing Employee data
router.put('/updateEmpsData', (req,res, next) => {
  EmployeeDetailsCollection.findOneAndReplace({_id: 2}, {name: {firstName: 'nurav'}}, (err) => {
    res.send(err);
  });
  
});

// Get employee Quiz questions
// Post answers and calculate score
// Update Quiz answers or score

module.exports = router;
