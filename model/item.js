var config = require('../config/config');
var mongoose = require('../mongoose')
    var newSchema = mongoose.Schema({
        title: { 
            type:String,
            required: true,
            trim: true
        },
        discount: {
            type: Number,
            // required: true,
            trim: true
        },
         image: {
            type: String,
            required: true,
            trim: true
        } ,
        slash: {
            type: Number,
            // required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
         stock: {
            type: Number,
            required: true,
            trim: true
        }
        //  size: {
        //      type: String,
        //      required: true,
        //      trim: true
        //  },
    });
    var Item = mongoose.model("Items",newSchema);

module.exports = Item;