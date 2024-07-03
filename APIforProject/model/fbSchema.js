const mongoose = require('mongoose');
const fbSchema = new mongoose.Schema({
    feedback:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('Feedback',fbSchema);