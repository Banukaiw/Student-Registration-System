//firstly create server folder,then npm init, then create index.js, then install dotenv,body-parser,express,mongoose, nodemon(npm install --save-dev nodemon),
//then import packfges, then create .env file

import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"

/* const express =  require("express");
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv") */



//const PORT = process.env.PORT || 8070;
//host karaddi 8070 nathnam available 1k denne

//app.use(cors());
const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGODB_URL;

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("BD conected successfully")
    app.listen(PORT,()=>{
        console.log(`server is running on port :${PORT}`)
    })
    .catch((error)=>console.log(error))
})