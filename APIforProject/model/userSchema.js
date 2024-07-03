const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userType: String,
    publicationHouseName: String,
    publicationProof: String,
    address: String,
    city: String,
    state: String,
    pincode: Number,
    bookTypes: String,
    customerBookTypes: String,
    customerState: String,
    customerCity: String
});

module.exports = mongoose.model('User', userSchema);
