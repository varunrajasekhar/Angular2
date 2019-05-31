var UserCartCollection = require('../server-models/user_cart.model');
var ProductCollection = require('../server-models/product.model');

//find user by id
exports.updateCart = (req, res) => {
  var responseObject = {};
  responseObject.success = false;
  var saveToCart = false;
  var userCart = new UserCartCollection(req.body);

  console.log(req.body);

  const products = req.body.products;
  const productsInCollection = product.findById({}, )

  products.forEach(productInCart => {
    
  });

  if (saveToCart) {
    responseObject = false;
  } else {
    responseObject = true;

    userCart.save((err) => {
      if (err) {
        // logger.error(err);
        return res.json(err);
      }
      responseObject.success = true;
      res.json(responseObject);
    });
  };

  res.json(responseObject);  
}