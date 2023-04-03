const Flight=require("../models/flight");
 const addflight=async(req,res,next)=>{
    try{
        const newflight=new Flight({
            flightid:req.body.fid,
            airlineid:req.body.aid,
            From:req.body.bp,
            To:req.body.dp,
            arrival:req.body.atime,
            dept:req.body.dtime,
            duration:req.body.dur,
            seatsAvailable:req.body.aseats,
            economyPrice:req.body.eprice,
            BusinessPrice:req.body.bprice
         })
         await newflight.save()
         res.status(200).send("Flight has been created");
    }catch(err){
        next(err)
    }
}

module.exports=addflight;