const mongoose = require('mongoose');
const pubSchema = new mongoose.Schema({
    pubname:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    ofemail:{
        type:String,
        required:true
    },
    contactno:{
        type:Number,
        required:true
    },
})
module.exports = mongoose.model('Pub',pubSchema);