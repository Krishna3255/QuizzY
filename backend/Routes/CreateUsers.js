const express = require('express');
const router = express.Router();
const User = require("../models/users");

router.post("/creatuser",async(req,res)=>{

    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
            // profession:req.body.profession
        });
        res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})


router.post("/login",async(req,res)=>{
     
    let email=req.body.email;
    try{
        let userData= await User.findOne({email});
        if(!userData){
    
            return res.status(400).json({error:"Try log in with crt creditinals"})
        }
        let password=req.body.password;
        if(password!==userData.password){
            return res.status(400).json({error:"Password is incorrect"});
        }
        res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
   

})

module.exports= router;

