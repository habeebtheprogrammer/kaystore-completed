var express = require('express');
var Router = express.Router();
var item = require('../model/item')
var formidable= require('formidable');
var fs = require('fs')
var gm = require('gm')
var path = require('path')
//send all items to the request
Router.get('/', function (req, res, next) {
    
        item.find().then(function (doc) { res.send(doc) }).catch(function (erro) { console.log(erro) })
})

//send all items matching the req.params.id to the request
Router.get("/:id",function(req,res,next){
    item.findOne({
        title: req.params.id
    }).then(function (doc) { console.log(doc); res.json(doc) }).catch(function (erro) { console.log(erro) })
})

//post new item
.post('/', function (req, res, next) {
        var newForm = new formidable.IncomingForm();
        newForm.keepExtensions = true;
        var tmpdir, newdir, fileName, fields, newItem;
        newForm.parse(req,function (err,fields,files) {
            fields = fields;
            tmpdir = files.image.path
            fileName = files.image.name;
            newdir = path.join( process.cwd(), "build/images/"+files.image.name);
            fields.image = fileName;
            newItem = new item(fields);
          });
          newForm.on("end",function () { 
              fs.rename(tmpdir, newdir, function () {
              }); 
              newItem.save().then(function (doc) {
                    res.send(doc)
                }).catch(function (err) { 
                    res.sendStatus(404) })
           })
      
        // var newItem = new item(
        //     { image: "1(35).jpg", category: "mens fashion", URI: "new-imae", title: "Lorem ipsumq adipisicing elit.", price: 10931, discount: 43, slash: 2302 }
        // )
        
    });

module.exports = Router;
