const express = require('express');
const mongoDB = require('./Database');
const cors = require('cors')
const app = express();
app.use(cors());

mongoDB();
app.use(express.json());
app.use("/api",require("./Routes/CreateUsers"));


app.listen(5000,()=>{console.log("Server Started at port 5000")})