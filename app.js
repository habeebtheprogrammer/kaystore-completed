var express = require('express');
var path = require('path');
var logger = require('morgan');
var config = require('./config/config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var product = require('./routes/items')
var categories = require('./routes/categories')
var newsletter = require('./routes/newsletter')
var seller = require('./routes/seller')
var search = require('./routes/search')
var admin = require('./routes/admin')
var index = require('./routes/index')
var user = require('./routes/user')
var cors = require("cors")
var app = express();
// view engine setup 
app.set('views', path.join(__dirname, 'build'));
app.engine("html", require('hbs').__express);
app.set('view engine', 'html');
app.use(cors())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/api/items', product)
app.use('/api/search', search)
app.use('/api/categories', categories)
app.use('/api/newsletter', newsletter)
app.use('/api/seller', seller)
app.use('/api/user', user)
app.use('/api/register', user)
app.use('/admin', admin)
app.use("*", index)
var port = process.env.PORT || '3001'
app.listen(port, function (req, res) {
  console.log("app running on port " + port);
})
// module.exports = app;
