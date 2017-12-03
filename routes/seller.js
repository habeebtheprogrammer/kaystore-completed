var express = require("express");
var Router = express.Router();
var seller = require('../model/seller');
var validator = require('validator');

function validation(input) {
    var valid = {}
    if (validator.isEmpty(input.firstname)) {
        valid.firstname = "Firstname is required"
    }
    if (validator.isEmpty(input.lastname)) {
        valid.lastname = "Lastname is required"
    }
    if (validator.isEmpty(input.phone)) {
        valid.phone = "Phone Number is required"
    }
    if (validator.isEmpty(input.email)) {
        valid.email = "Email is required"
    }
    if (!validator.isEmail(input.email)) {
        valid.email = "Email is not Valid"
    }
    if (validator.isEmpty(input.address)) {
        valid.address = "Address is required"
    }
    return valid
}
Router.post("/", function (req, res, next) {
    var customValidator = validation(req.body);
    console.log(customValidator)
    res.json(customValidator)
    // var user = new seller(req.body);
    // user.save().then(function (doc) { console.log(doc); res.send(doc) }).catch(function (err) { console.log(err); res.send(err) })
})

module.exports = Router