/***********************************
File name     : user.js
Student name  : Mariela Ramos
Student ID    : 301324510
Date          : 2023-02-09
************************************/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
