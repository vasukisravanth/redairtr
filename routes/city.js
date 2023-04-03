const express=require('express');
const city=require("../models/city");

const router=express.Router();


router.post('/addcity',(req,res)=>{
    city.create(req.body)
        .then(city=>res.json({msg:"updated"}))
        .catch(err=>res.status(404).json({msg:"cant update"}));
});

module.exports=router;