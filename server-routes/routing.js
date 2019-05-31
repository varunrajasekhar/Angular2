
var router = require('express').Router();
var users = require('../server-controllers/user-controller.js');
var userCart = require('../server-controllers/user-cart-controller.js');

// multi user data
router.post('/postUsersData', users.postUsersData);
// all users
router.get('/userData', users.findAll);
// one user by id (optional - firstName)
router.get('/userData/:id?/:firstName?', users.findUserById);

router.post('/updateCartData', userCart.updateCart);

module.exports = router;