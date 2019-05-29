
var router = require('express').Router();
var users = require('../server-controllers/user-controller.js');

router.post('/postUsersData', users.postUsersData);
router.get('/userData', users.findAll);

module.exports = router