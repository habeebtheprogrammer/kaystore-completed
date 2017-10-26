var express = require('express');
var router = express.Router();
var categories = require('../model/categories')
var item = require('../model/item')
var formidable = require('formidable');
var path = require('path')

var fs = require("fs");
//send all categories to the request
router.get('/', function (req, res, next) {
    categories.find().then(function (doc) { res.json(doc) }).catch(function (erro) { res.send(404)})
    // item.remove({ title: "google wristwatch with alarm" }).then(function (doc) {
    //     console.log(doc)
    // })
})

//send all items matching the req.params.id to the request
.get('/:id',function(req,res,next){
    var title = req.params.id; 
        item.find({
            category: title.toLowerCase()
        }).then(function (doc) { 
            if(doc.length) res.json(doc); else {res.status(404);res.send(404)}
        }).catch(function (erro) {console.log(erro);res.send(404) })
})

//post new category
.post('/', function (req, res, next) {
        var newform = new formidable.IncomingForm();
        newform.keepExtensions = true;

        var tmpdir, newdir, fileName, fields, newItem;
        newform.parse(req,function(err,fields,files){ 
            console.log(files);
            fields = fields;
            tmpdir = files.banner.path
            fileName = files.banner.name;
            newdir = path.join(process.cwd(), "build/images/" + files.banner.name);
            fields.image = fileName;
            var newCat = new categories({
                title: fields.title,
                banner: fileName
            });
            newCat.save().then(function (doc) { res.send(doc) }).catch(function (err) { res.send(err) })
         });
         newform.on("end",function () { 
             fs.rename(tmpdir, newdir, function () {
             }); 
             res.send("successfull")
        })

       
    });

module.exports = router;
