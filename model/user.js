var mongoose = require("../mongoose");

var newSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});
    var user = mongoose.model("user",newSchema);
module.exports = user;