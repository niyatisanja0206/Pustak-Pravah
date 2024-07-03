const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

// Route for user sign-up
router.post('/signup', async (req, res) => {
    console.log('Test');
    console.log(req.body);
    console.log('Test2');
     try {
        const {
            firstName,
            lastName,
            email,
            password,
            userType,
            publicationHouseName,
            publicationProof,
            address,
            city,
            state,
            pincode,
            bookTypes,
            customerBookTypes,
            customerState,
            customerCity
        } = req.body;

        // Create a new user object
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            userType,
            publicationHouseName,
            publicationProof,
            address,
            city,
            state,
            pincode,
            bookTypes,
            customerBookTypes,
            customerState,
            customerCity
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        // Handle error
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
