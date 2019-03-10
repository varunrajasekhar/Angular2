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
  // _id: Number,
  title: String,
  name: Object,
  address:  { type: Schema.Types.ObjectId, ref: 'emp_address_collections' },
  designation: Object
});

var EmployeeAddressSchema = new Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'emp_details_collections' },
  address: Object
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

// Get One Employee Information based on Id
// router.get('/empsData/:id', (req, res, next) => {
//   EmployeeDetailsCollection.find({_id: mongoose.Types.ObjectId(req.params.id)}, (err, data) => {
//     if (err) {
//       res.send(err);
//     }
  
//     res.json(data);
//   });
// });

// Get One Employee Information by Name or email
router.get('/empsData/:name', (req, res, next) => {
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
  if (Array.isArray(req.body) && typeof req.body === 'object') {
    EmployeeDetailsCollection.insertMany(req.body, function(err) {
      if (err) {
        res.send(err.errmsg);
      }
      res.send('send');
    });
  } else {
    var empAddRecord = new EmployeeAddressCollection({address: req.body.address});
    
    empAddRecord.save()
    .then(result => {
      //res.send(result);
      
      // save empRecord

      req.body.address = empAddRecord._id;
      var empRecord = new EmployeeDetailsCollection(req.body);



      empRecord.save()
      .then(result => {
        //res.send(result);
      })
      .catch((err) => {
        //res.send(err);
      });
    })
    .catch((err) => {
     // res.send(err);
    });

    // empRecord.save()
    // .then(result => {
    //   res.send(result);
    // })
    // .catch((err) => {
    //   res.send(err);
    // });
  }
  
    
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
