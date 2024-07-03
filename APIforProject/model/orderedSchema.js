const mongoose = require('mongoose');
const orderedSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    auther:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    url1:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    pubname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Ordered',orderedSchema);