const express = require("express");

const app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now()+"Log all requests");
    next();
})


app.get("/",(req,res)=>{
    res.send("Hello");
})

app.get("/world",(req,res)=>{
    res.send("Hello world");
})


app.listen(3333, ()=>console.log("Server started"));