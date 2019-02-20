const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser"); //used to send a request to server
const cors = require("cors"); //allow the request from different port
var app = express(); //let can also be use / creating an object to reference of express (express())
app.use(cors());  //it allows request from different ports
const PORT = 3000;    //small or uppercase
app.use(bodyparser.urlencoded(
    {
        extended: true
    }
));
app.use(bodyparser.json());
const malini=require('./servers/routes/api') //using api we use data from other files
app.use('/ragha',malini);   // /api is used to import package api
app.listen(PORT,function()
    {
        console.log("server served");
    }
);



// server //entry point

// api js //connection db, router

//movie js//schema model