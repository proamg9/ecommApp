var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../model/user');
var Category = require('../model/category');
var Product = require('../model/product');
const Pusher = require("pusher");
//pusher module initalize
const pusher = new Pusher({
     appId: '754209',
     key: 'a32cebd878d11b399d4c',
     secret: '052e107dca8b3c1a0a93',
     cluster: 'us3',
     encrypted: true
});
//*  following pusher.trigger function  send [server data change-message] to  client */
var path = require('path');

var sendJSONresponse = function (res, status, content) {
     res.status(status);
     res.json(content);
};


// login module
module.exports.login = function (req, res) {

     passport.authenticate('local', function (err, user, info) {
          var token;
          // If Passport throws/catches an error
          if (err) {
               res.status(404).json(err);
               return;
          }
          // If a user is found
          if (user) {
               token = user.generateJwt();
               res.status(200);
               res.json({
                    "token": token
               });

          } else {
               // If user is not found
               res.status(401).json(info);
          }
     })(req, res);
};




/////// response to category crud request
module.exports.getallcategory = function (req, res) {
     Category
          .find()
          .exec(function (err, category) {
               res.status(200).json(category);

          });

};
//add cat.
module.exports.addcategory = function (req, res) {
     console.log(req.body);
     var category = new Category();
     category.category_name = req.body.category_name;
     category.parent_id = req.body.parent_id;
     category.save(function (err) {
          if (err) {
               res.status(404).json(err);
               return;
          }
          res.status(200).json('category');

     });

     pusher.trigger("category-channel", "send-change", {
          status: 'categorychange'
     });
};

module.exports.editcategory = function (req, res) {
     console.log('update',req.body);

     Category.findOne({ _id: req.body.id}, function(err,category){
          if (!category)
          return next(new Error('Could not Category Document'));
        else {
            category.category_name = req.body.category_name;
            category.parent_id = req.body.parent_id;
            category.save().then(category => {
               res.json('Update  Category complete');
           })
           .catch(err => {
                 res.status(400).send("unable to update the database");
                 return;
           });
         }
     });

     pusher.trigger("category-channel", "send-change", {
          status: 'categorychange'
     });
};

module.exports.delcategory = function (req, res) {
     category_id = req.body.id;
     Category.find({
          "$or": [{
               "_id": req.body.id
          }, {
               "parent_id": req.body.id
          }]
     }).remove().exec(function (err) {
          res.status(200).json('Delete Category Success');

     });
     pusher.trigger("category-channel", "send-change", {
          status: 'categorychange'
     });
};

/////// response to  product crud request

module.exports.getproduct = function (req, res) {
     category_id = req.body.id;
     //    console.log('get product',req.body);

     Product.find({ category_id: category_id })
          .exec(function (err, product) {
               res.status(200).json(product);
          });
};

module.exports.addproduct = function (req, res) {
     console.log(req.body);
     var product = new Product();
     product.product_name = req.body.product_name;
     product.category_id = req.body.category_id;
     product.keywords = req.body.keywords;

     product.save(function (err) {
          if (err) {
               res.status(404).json(err);
               return;
          }
          res.status(200).json('product add');

     });
     pusher.trigger("category-channel", "send-change", {
          status: 'productchange'
     });
};


module.exports.delproduct = function (req, res) {
     product_id = req.body.id;
     Product.find({ _id: product_id })
     .remove().exec(function (err) {
          res.status(200).json('Delete Product Success');

     });
     pusher.trigger("category-channel", "send-change", {
          status: 'productchange'
     });
};
