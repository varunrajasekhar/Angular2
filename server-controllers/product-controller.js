var ProductCollection = require('../server-models/product.model');

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