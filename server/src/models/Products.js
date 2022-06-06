const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema(
    {
        
        title: {type:String, required:true},
        price: {type:Number, required:true},
        category:  {type:String, required:true},
        description: {type:String, required:false},
        image: {type:String, required:true, unique:true},
        rating: {
          rate: {type:Number, required:false},
          count: {type:Number, required:false},
        }
    },
        
       {
        
            timestamps: true,
        }
  );

  const Products = mongoose.model("Products", productsSchema);
  module.exports= Products;