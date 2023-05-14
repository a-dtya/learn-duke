const express = require("express")
const app = express()
const passport = require("passport")

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("./pages/index")
})

app.listen(5000,()=>{
    console.log("Server Started")
})