var express = require('express');
var router = express.Router();
var categories = require('../model/categories')
var item = require('../model/item')
var formidable = require('formidable');
var path = require('path')

var fs = require("fs");
//send all categories to the request
router.get('/', function (req, res, next) {
    categories.find().then(function (doc) { res.json(doc) }, (error)=>res.sendStatus(500)).catch(function (error) { console.log(error); res.sendStatus(501)})
    // item.remove({ title: "google handbag" }).then(function (doc) {
    //     console.log(doc)
    // })
})

//send all items matching the req.params.id to the request
.get('/:id',function(req,res,next){
    var title = req.params.id; 
        item.find({
            category: title.toLowerCase()
        }).then(function (doc) { 
            if(doc.length) res.json(doc); else {res.sendStatus(404)}
        }).catch(function (erro) {console.log(erro);res.sendStatus(404) })
})

//post new category


module.exports = router;
