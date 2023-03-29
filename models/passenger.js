

const mongoose=require('mongoose');
const passengerSchema=new mongoose.Schema({
    pname:{
      type:String,
      required:true}
    ,
    pphone:{
      type:String,
  required:true},
    pemail:{
      type:String,
  required:true},
    pflightid:{
      type:String,
      required:true},
    psource:{
      type:String,
      required:true},
    pdest:{
      type:String,
      required:true},
    pprice:{
      type:String,
    required:true}

   
  
  
  
  });
 const passenger=new mongoose.model("passenger",passengerSchema);

 module.exports=passenger;