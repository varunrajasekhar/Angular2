var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var mongojs = require('mongojs');
ObjectId = require('mongodb').ObjectID;



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

// Compile model from schema
var EmployeeDetailsCollection = mongoose.model('emp_details_collection', EmployeeModelSchema );
var count = 1;

var emp_details_collection = new EmployeeDetailsCollection({
  _id: count,
  title: 'Testing First',
  name: {
    firstName: "Varunrajasekhar",
    lastName: "Yarlagadda"
  },
  address: {
    line1: "7514 Nicollet",
    line2: "S",
    line3: undefined
  }
});
 
 EmployeeDetailsCollection.findById({_id: 5}, function (err, user){
console.log(user);
 });


//EmployeeDetailsCollection.findByIdAndRemove({_id: 1});


 