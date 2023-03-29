const express=require('express');

const user=require("../models/user");

const router=express.Router();


router.post('/adduser',async(req,res)=>{



    try {
        const {
             name, email, password 
            } = req.body;
        console.log(req.body);
        if (!name || !email || !password) 
        {
          res.status(400).send({ err: "Please enter all fields." });
        } 
        else 
        {
          const newUser = new user({
            
            name: name,
            email: email,
            password: password,
          });
    
          await newUser.save();
    
          res.status(200).send({ message: "User created successfully." });
        }
      } catch (error) {
        res.status(400).send({ err: error });
      }
    });

router.get('/getuser',(req,res)=>{
    user.find().then(user=>res.json(user))
    .catch(err=>res.status(404).json({msg:"no user"}));
});


router.get("/login", async (req, res) => {
    try {
      const { email, password } = req.query;
      console.log(req.query);
  
      if (!email || !password) {
        res.status(400).send({ err: "Please enter all fields." });
      } else {
        const users = await user.findOne({ email: email });
  
        if (!users) {
          res.status(404).send({ err: "User not found" });
        } else {
          if (users.password === password) {
            res.status(200).send({ message: users });
          } else {
            res.status(404).send({ err: "Incorrect password" });
          }
        }
      }
    } catch (error) {
      res.status(400).send({ err: "Something went wrong please try again" });
    }
  });

router.get('/:id',(req,res)=>{
    user.findById(req.params.id).then(user=>res.json(user))
    .catch(err=>res.status(404).json({msg:"no user"}));
});

module.exports=router;