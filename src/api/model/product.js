var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var product=new Schema({
     product_name: {
          type:String,
          required: true
     },
     category_id: {
          type:String,
          required: true
     },
     keywords: {
          type:Array,
          required: true
     }

  },
     {
     collection: 'product'
     });

module.exports=mongoose.model('product', product);
