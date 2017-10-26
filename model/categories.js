var config = require('../config/config');
var mongoose = require('../mongoose')
    var catSchema = mongoose.Schema({
        title: { 
            type:String,
            required: true,
            trim: true},
    //    URI: {
    //         type: String,
    //         required: true,
    //         trim: true
    //     },
        banner: {
            type: String,
            trim: true
        }
    });
    var Categories = mongoose.model("categories",catSchema);

module.exports = Categories;