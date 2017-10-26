var mongoose = require('mongoose');

var newSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});

var email = mongoose.model("newsletter",newSchema);
module.exports = email;