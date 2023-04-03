const express = require('express');
const router = express.Router();
const reservation = require('../models/reservation');
const Flight=require("../models/flight");
const passenger = require('../models/passenger');


router.post('/addreservation',async(req,res)=>{



    try {
        const {
             passenger_id,flightid,rid
            } = req.body;
        console.log(req.body);


        const passengers = await passenger.findOne({ passenger_id:req.body.passenger_id});

        const flight=await Flight.findOne({flightid:req.body.flightid});

       
          const newUser = new reservation({
            
            rid:rid,
            user_id: passengers.passenger_id,
            From: flight.From,
            To:flight.To,
            Dtime:flight.dept,
            Atime:flight.arrival,
            




          });
    
          await newUser.save();
    
          res.status(200).send({ message: "reserved created successfully." });
        
      } catch (error) {
        res.status(400).send({ err: error });
      }
    });






module.exports = router;