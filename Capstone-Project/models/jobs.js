const mongoose = require('mongoose')

var jobSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    salary : {
        type: String,
        required: true,
    },
    experience : {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("jobs",jobSchema)