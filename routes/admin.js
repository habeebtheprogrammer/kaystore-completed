var express = require('express');
var router = express.Router();
// var categories = require('../model/categories')
// var item = require('../model/item')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("admin");
  // var newItem = new item(
  //   { image: "1(35).jpg",category:"mens fashion" ,URI:"new-imae",title: "Lorem ipsumq adipisicing elit.", price: 10931, discount: 43, slash: 2302 }
  // )
  // newItem.save().then(function (doc) {console.log(doc)  }).catch(function (erro) { console.log(erro) })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
