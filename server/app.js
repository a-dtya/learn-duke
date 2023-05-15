const express = require("express")
const app = express()
const passport = require("passport")
const session = require('express-session')
const cookieSession = require("cookie-session")

require("dotenv").config()
require("./passport-setup")
app.set("view engine","ejs")
app.use(cookieSession({

    name:'tuto-session',
    keys:['key1','key2'] 
}))
app.use(passport.initialize())
app.use(passport.session())
app.get("/",(req,res)=>{
    res.render("./pages/index")
})
const isLoggedIn = (req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.send("error")
    }
}
app.get('/good',isLoggedIn,(req,res)=>{
    res.send("./views/pages/profile.ejs",{name:req.user.displayName,email:req.user.email})
})
app.get("/logout",(req,res)=>{
    req.session=null
    req.logout()
    res.redirect("/")
})
app.get("/google",passport.authenticate('google',{scope:['profile','email']}))    
app.get("/google/callback",passport.authenticate('google',{failureRedirect: '/failed'}),function(req,res){
    res.redirect("/good")
})
app.listen(5000,()=>{
    console.log("Server Started")
})