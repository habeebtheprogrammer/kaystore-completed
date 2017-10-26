var express = require("express");
var Router = express.Router();
var seller = require('../model/seller');
Router.post("/", function (req, res, next) {
    console.log(req.body);
    var user = new seller(req.body);
    user.save().then(function (doc) { console.log(doc); res.send(doc) }).catch(function (err) { console.log(err); res.send(err) })
})

module.exports = Router