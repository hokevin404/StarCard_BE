import User from '../models/Users.mjs';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserController = {
    // Method to create a new user
    createUser: async (req, res) => {
        // Destructure body of request
        const {fname, lname, username, email} = req.body;
        
        // Generate unique userID
        const userID = uuidv4();

        // Validation of request
        const errors = validationResult(req);

        // If errors present, return 400 status
        if(!errors.isEmpty())
            return res.status(400).json({errors: errors.array()});

        try {
            // Check for existing username
            let user = await User.find({username});
            if(user)
                return res.status(400).json({errors: [{msg: 'Username already exist'}]});

            // Use mongoose method to create new user
            const newUser = await User.create({userID, fname, lname, username, email});
            // respond with newly created user
            res.status(201).json({newUser});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

    // Method to update a user
    updateUser: async (req, res) => {
        // Deconstruct parameter of request
        const {id} = req.params;

        // Deconstruct body of request
        const {fname, lname, email} = req.body;

        try {
            // Mongoose method to find user by userID and then update data
            const updatedUser = await User.findByIdAndUpdate(id, {fname, lname, email});
            // Respond with newly updated user
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    },

    // Method to delete user
    deleteUser: async (req, res) => {
        // Deconstruct parameters of request
        const {userID} = req.params;
        try {
            // Mongoose method to find user by userID and delete user
            await User.findByIdAndDelete(userID);
            // Respond with message
            res.json({message: 'User deleted successfully'})
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}

export default UserController;