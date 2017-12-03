var express = require("express");
var Router = express.Router();
var validator = require('validator')
var newsletter = require('../model/newsletter');
Router.post("/",function (req,res,next) { 
   

    function validateInput(input) {  
        var error = {}
        if (!validator.isEmail(input.email)) {
            error.email = "Email is not valid"
        }
        if(validator.isEmpty(input.email)){
            error.email = "Email is required"
        }
        return error;
    }

    var valid = validateInput(req.body);
    if(valid.email === undefined){
        console.log(valid)
        var email = new newsletter({
            email: req.body.email
        });

        newsletter.findOne({email: req.body.email}).then((user)=>{
            if(user === null){
                email.save().then(function (doc) { console.log(doc); res.send({success: "Newsletter Signup Was Successful"}) }).catch(function (err) { console.log(err); res.send({email: "An Error has occur"}) })
                
            } else 
            {   console.log(user)
                res.json({email: req.body.email+" has already signed up for our Newsletter" })}
        },(error)=>console.log(error))
    } else
    res.json(valid);

 })

 module.exports= Router