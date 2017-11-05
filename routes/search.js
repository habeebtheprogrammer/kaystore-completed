var express = require("express");
var router = express.Router();
router.get("/",function(req,res,next){
    console.log(req.query.product);
    res.json({"results":"none"})
});
module.exports = router