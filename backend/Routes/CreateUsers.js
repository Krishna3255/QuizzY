const express = require('express');
const router = express.Router();
const User = require("../models/users");

router.post("/creatuser",async(req,res)=>{

    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profession:req.body.profession
        });
        res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false})
    }
})



module.exports= router;

