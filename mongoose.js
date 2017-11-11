var mongoose = require('mongoose');
var config = require("./config/config");
mongoose.Promise = global.Promise;
// mongoose.connect(config.dbURL, { useMongoClient: true }, function (err) {
// });
mongoose.connect("mongodb://guest:guest@ds037215.mlab.com:37215/kaystore", { useMongoClient: true},function(err){
});
module.exports = mongoose;
