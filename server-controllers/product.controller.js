var ProductCollection = require('../server-models/products.model');
var logger = require('../server-routes/routing.js');

//find product by id
exports.findUserById = (req, res) => {
  console.log(req.params)
  UserDetailsCollection.findById(req.params.id, (err, data) => {
    
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}

// find all products
exports.findAll = (req, res) => {
  UserDetailsCollection.find({}, (err, data) => {
    
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.insertMultipleProducts = (req, res) => {  
  var responseObject = {};
  responseObject.success = false;

  ProductCollection.insertMany(req.body, (err, data) => {
    if(err) {
      logger.debug('error');
      res.send(err);
    }
    responseObject.success = true;
    res.send(responseObject);
  })
  
}