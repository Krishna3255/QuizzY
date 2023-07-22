const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://Krishna2848:%23mongodb@cluster1.s60qbeh.mongodb.net/user_details?retryWrites=true&w=majority";

mongoose.set('strictQuery',true);


const mongoDB = ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser:true}, async(err,result)=>{
        if(err) console.log("------",err);
        else{
            console.log("connected successfully")
        }

    })
}


module.exports = mongoDB;