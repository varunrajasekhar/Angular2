var UserDetailsCollection = require('../server-models/users_details.model');
var UserAddressCollection = require('../server-models/user_addresses.model');

//find user by id
exports.findUserById = (req, res) => {
  console.log(req.params)
  UserDetailsCollection.findById(req.params.id).populate('address').exec((err, data) => {
    
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}

// find all users
exports.findAll = (req, res) => {
  UserDetailsCollection.find({}).populate('address').exec((err, data) => {
    
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

// post user details
exports.postUsersData = (req, res, next) => {
  var responseObject = {};
  responseObject.success = false;
  var userAddress = new UserAddressCollection(req.body.address);
  // if(Object.keys(req.body.address).length > 0) {
    userAddress.save(function(err) {
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
};



