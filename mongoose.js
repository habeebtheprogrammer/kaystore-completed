var mongoose = require('mongoose');
var config = require("./config/config")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://guest:guest@ds037215.mlab.com:37215/kaystore", { useMongoClient: true},function(err){
});
// mongoose.createConnection("mongodb://habeebtheprogrammer:k1o2l3a4@ds037215.mlab.com:37215/kaystore")
module.exports = mongoose;
