const mongoose=require('mongoose');
const flightSchema = new mongoose.Schema(
  {
	"flightid": {
		type: String,
		required: true,
		unique: true
	},
	"airlineid":{

		type:String,
		required:true
	},
	"From":{
		type:String,
		required:true

	},
	"To":{
		type:String,
		required:true
	},
	"arrival":{
		type: Date,
		required:true
	},
	"dept":{
		type:Date,
		required:true
	},
	"seatstotal":{
		type:Number,
		required:true,
		
	},
	"seatsAvailable":{
		type:Number,
		required:true,
		default:180
	},
	"BookedSeats":{
		type : Array ,
		 "default" : []
	},
	"BusinessPrice":{
		type:Number,
		required:true
	} },
  { timestamps: true }
);



const Flight=new mongoose.model("Flight",flightSchema);
module.exports=Flight;