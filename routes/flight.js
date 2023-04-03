const express=require('express');

const addflight=require("../controllers/flightcontroller");

const Flight=require("../models/flight");

const router=express.Router();

router.post('/addflight',(req,res)=>{
    Flight.create(req.body)
        .then(Flight=>res.json({msg:"updated"}))
        .catch(err=>res.status(404).json({msg:"cant update"}));
});

router.get('/getflight',(req,res)=>{
    Flight.find().then(Flight=>res.json(Flight))
    .catch(err=>res.status(404).json({msg:"no flights"}));
});

router.delete('/:id',(req,res)=>{
    Flight.findByIdAndRemove(req.params.id,req.body)
     .then(Flight=>res.json({msg:"deleted"}))
    .catch(err=>res.status(404).json({error:"No such flight"}));
});


router.put('/:id', (req, res) => {
    Flight.findByIdAndUpdate(req.params.id, req.body)
      .then(Flight => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

router.get('/specific',async (req,res)=>{
  try{
    const {
      From, To,dateo
     } = req.body;

     console.log(req.body);

     const flights = await Flight.findOne({ From: From,To:To,dept:dateo });

     console.log(flights);


  }catch (error) {
    res.status(400).send({ err: "Something went wrong please try again" });
  }

})

router

module.exports=router;