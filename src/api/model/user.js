var mongoose= require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var Schema=mongoose.Schema;
var PLANN_SECRET=//'MIIBOQIBAAJBAKA23gBVRx/JZpO7pcRAiebFkBKx8a9VRB+KlgwPRwTX5s';
'user786';
var user=new Schema({
     UserEmail: {
          type:String,
          unique: true,
          required: true
     },
     // data:Schema.Types.Mixed;
      hash:String,
      salt:String
     },
     {
     collection: 'user'
     });

     user.methods.setPassword = function(password){
          this.salt = crypto.randomBytes(16).toString('hex');
          this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
     };
     user.methods.validPassword = function(password) {
          var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
          return this.hash === hash;
        };
     user.methods.generateJwt = function() {
          var expiry = new Date();
          expiry.setDate(expiry.getDate() + 7);
          return jwt.sign({
               _id: this._id,
               email: this.UserEmail,
               exp: parseInt(expiry.getTime() / 1000),
          }, PLANN_SECRET);
     };
module.exports=mongoose.model('user', user);
