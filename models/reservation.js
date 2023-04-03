const mongoose = require('mongoose');
const shortid = require('shortid');

const reservationSchema = new mongoose.Schema({
    rid:{
        type: String,
        required: true,
        default: shortid.generate()
    },
    user_id: {
        type: String,
        required: true
    },
    From:{
        type:String,
      required:true
      },
    To:{
        type:String,
        required:true
      },
    Dtime:{
        type:String,
        required:true
      },
    Atime:{
        type:String,
        required:true
      },
  
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
