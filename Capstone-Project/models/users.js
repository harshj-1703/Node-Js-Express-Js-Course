const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    mobile_number : {
        type: String,
        minLength: 10,
        maxLength: 10,
        required: true,
    },
    isadmin : {
        type: Boolean,
        required: true,
        default: false,
    },
})

module.exports = mongoose.model("users",userSchema)