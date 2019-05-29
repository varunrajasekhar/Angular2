var UserDetailsCollection = require('../server-models/user.model');
var UserAddressCollection = require('../server-models/user_address.model');

exports.findAll = (req, res, next) => {
  var responseData = [];
  UserDetailsCollection.find({}, (err, data) => {
    responseData = data;
    responseData.forEach((element, index) => {
      UserAddressCollection.findById(element.address, function(err, add_data) {
        console.log(index);
        console.log(element);
        console.log(add_data);
        responseData[index].address = Object.assign({}, add_data);
      });
    });
    if (err) {
      res.send(err);
    }
    res.json(responseData);
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