var express = require("express");
var Router = express.Router();
var newsletter = require('../model/newsletter');
Router.post("/",function (req,res,next) { 
    console.log(req.body);
    var email = new newsletter({
        email: req.body.email
    });
    email.save().then(function (doc) { console.log(doc); res.send(doc) }).catch(function (err) { console.log(err); res.send(err) })
 })

 module.exports= Router