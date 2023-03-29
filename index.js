
const express=require('express');
const mongoose=require('mongoose');

const routerflight= require("./routes/flight");
const routeruser=require("./routes/user");

const app=express();


const dburi="mongodb+srv://vas:sravan@cluster0.n7bw0.mongodb.net/redairtravel?retryWrites=true&w=majority";


const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

mongoose.connect(dburi,connectionParams).then(()=>{
    console.log('database connected');
}).catch((e)=>{
    console.log(e);
});

app.use(express.json());

app.use(routerflight);
app.use(routeruser);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage=err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

app.listen(3000,(req,res)=>{
    console.log('connected');
})