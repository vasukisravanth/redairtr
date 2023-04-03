const express = require('express');
const router = express.Router();
const passenger = require('../models/passenger');

const Flight=require("../models/flight");
const reservation = require('../models/reservation');

router.get('/all',(req,res)=> {
    passenger.find()
        .then(passengers=> res.json(passengers))
        .catch(err=>res.status(404).json({msg:"no passengers"}));
});


router.get('/specificp',async (req,res)=>{
    try{
      const {
        passenger
       } = req.body;
  
       console.log(req.body.passenger_name);
       console.log(passenger);
  
       const passengers = await passenger.findOne({ passenger_name:req.body.passenger_name});
  
       console.log(passengers);
  
  
    }catch (error) {
      res.status(400).send({ err: "Something went wrong please try again" });
    }
  
  })

router.post('/addpassenger',async (req, res) => {

    passenger.create(req.body)
        .then(passenger => res.json({ msg: 'passenger added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this data' }));

    console.log(req.body.flightid);
    let seatsav;
    // Flight.findByIdAndUpdate(req.body.flightid, {$set: {"seatsAvaliable": req.body.seatsAvaliable - 1 }});
    const flight = await Flight.findOne({flightid:req.body.flightid});
    console.log(flight.seatsAvailable);
    seatsav=flight.seatsAvailable - 1;
    flight.seatsAvailable -= 1;
    console.log(flight.seatsAvailable);

    flight.save();

    // const flights = Flight.findByIdAndUpdate(req.body.flightid);
    // flights.seatsAvailable = seatsav;


});



router.put('/findpassengerandup/:id', (req, res) => {
    passenger.findByIdAndUpdate(req.params._id, req.body)
        .then(passenger => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});



module.exports = router;