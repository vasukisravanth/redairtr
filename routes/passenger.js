const express = require('express');
const router = express.Router();
const passenger = require('../models/passenger');
const reservation = require('../models/reservation');

router.get('/all',(req,res)=> {
    passenger.find()
        .then(passengers=> res.json(passengers))
        .catch(err=>res.status(404).json({msg:"no passengers"}));
});


router.get('/',async (req,res)=>{
    try{
      const {
        passenger_name
       } = req.body;
  
       console.log(req.body);
  
       const passenger = await passenger.findOne({ passenger_name:passenger_name});
  
       console.log(passenger);
  
  
    }catch (error) {
      res.status(400).send({ err: "Something went wrong please try again" });
    }
  
  })

router.post('/addpassenger', (req, res) => {
    passenger.create(req.body)
        .then(passenger => res.json({ msg: 'passenger added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this data' }));


});



router.put('/findpassengerandup/:id', (req, res) => {
    passenger.findByIdAndUpdate(req.params.id, req.body)
        .then(passenger => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});



module.exports = router;