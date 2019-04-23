var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var category=new Schema({
     category_name: {
          type:String,
          required: true
     },
     parent_id: {
          type:String,
          required: true
     },
    
     },   
     {
     collection: 'category'
     });

    
module.exports=mongoose.model('category', category);

