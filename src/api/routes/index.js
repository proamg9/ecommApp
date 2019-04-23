var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'user786',//'MIIBOQIBAAJBAKA23gBVRx/JZpO7pcRAiebFkBKx8a9VRB+KlgwPRwTX5s',
  userProperty: 'payload'
});


var ctrlAuth = require('../controller/authentication');
var ctrlProfile = require('../controller/profile');

// set server route
router.post('/login', ctrlAuth.login);

router.get('/getallcategory',ctrlAuth.getallcategory);
router.post('/addcategory', ctrlAuth.addcategory);
router.post('/editcategory', ctrlAuth.editcategory);
router.post('/delcategory', ctrlAuth.delcategory);

router.post('/getproduct', ctrlAuth.getproduct);
router.post('/addproduct', ctrlAuth.addproduct);
router.post('/delproduct', ctrlAuth.delproduct);


module.exports = router;
