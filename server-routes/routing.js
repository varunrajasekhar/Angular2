
var router = require('express').Router();
var users = require('../server-controllers/users.details.controller.js');
var userCart = require('../server-controllers/user.cart..controller.js');
var product = require('../server-controllers/product.controller.js');

require('mkdirp').sync('logs') // your log directory

// var log4js = require('log4js')

// log4js.configure({
//   appenders: { error: { type: 'file', filename: 'error.log' } },
//   categories: { default: { appenders: ['error'], level: 'error' } },
//   replaceConsole: true
// })

// var logger = log4js.getLogger('error');

// logger.level = 'debug';
// console.log(logger);

// exports.logger = () => logger || {};

// multi user data
router.post('/postUsersData', users.postUsersData);
// all users
router.get('/userData', users.findAll);
// one user by id (optional - firstName)
router.get('/userData/:id?/:firstName?', users.findUserById);

router.post('/updateCartData', userCart.updateCart);

router.post('/insertMultipleProducts', product.insertMultipleProducts);

module.exports = router;