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
		type:Date,
		required:true
	},
	"dept":{
		type:Date,
		required:true
	},
	
	"seatsAvailable":{
		type:Number,
		required:true
	},
	"economyPrice":{
		type:Number,
		required:true
	},
	"BusinessPrice":{
		type:Number,
		required:true
	} },
  { timestamps: true }
);



const Flight=new mongoose.model("Flight",flightSchema);
module.exports=Flight;