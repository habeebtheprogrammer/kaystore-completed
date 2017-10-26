var mongoose = require("../mongoose");

var newSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    location: {
        type: String,
        // required: true,
        trim: true
    },
    newsletter: {
        type: Boolean,
        trim: true
    },
    tac: {
        type: Boolean,
        trim: true
    }
});
    var user = mongoose.model("seller",newSchema);
module.exports = user;