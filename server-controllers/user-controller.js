var UserDetailsCollection = require('../server-models/user.model');
var UserAddressCollection = require('../server-models/user_address.model');

exports.findAll = (req, res, next) => {
  UserDetailsCollection.find({}).populate('address').exec((err, data) => {
    
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

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
    

  // } else {
  //   responseObject.success = false;
  //   responseObject.error = "Address Object is requried"
  //   res.json(responseObject);
  // }

};


// router.post('/postUsersData', (req, res, next) => {
//   var responseObject = {};
//   responseObject.success = false;
  
//   var userAddress = new UserAddressCollection(req.body.address);

//   // if(Object.keys(req.body.address).length > 0) {
//     userAddress.save((err) => {
//       if (err) {
//         return res.json(err);
//       }
      
//       var tempUserDetails = req.body;
      
//       tempUserDetails.address = userAddress._id;
  
//       var userDetails = new UserDetailsCollection(tempUserDetails);
  
//       userDetails.save((err) => {
//         if (err) {
//           logger.error(err);
//           return res.json(err);
//         }
//         responseObject.success = true;
//         res.json(responseObject);
//       })
//     });
    

//   // } else {
//   //   responseObject.success = false;
//   //   responseObject.error = "Address Object is requried"
//   //   res.json(responseObject);
//   // }
  
  

  
// });