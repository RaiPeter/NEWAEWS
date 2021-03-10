const mongoose = require('mongoose');

const helpSchema = {
    name: String,
    email: String,
    aadhar:String,
    mobile:Number,
    reason:String
}

const Help = mongoose.model('Help', helpSchema);

module.exports = Help;