const mongoose=require('mongoose');

const citySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
   },
    { timestamps: true }
 );

const city=new mongoose.model("city",citySchema);

module.exports=city;