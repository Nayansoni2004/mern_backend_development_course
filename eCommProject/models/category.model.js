/**
 * whats needed for category?
 * -> Category name
 * -> Category description
 */
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    }
}, {timestamps : true, versionKey : false})

module.exports = mongoose.model('Category', categorySchema)