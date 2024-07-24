import User from '../models/Users.mjs';
import { v4 as uuidv4 } from 'uuid';

const UserController = {
    // Method to create a new user
    createUser: async (req, res) => {
        const {fname, lname, username, email} = req.body;
        const userID = uuidv4();
        try {
            const newUser = await User.create({userID, fname, lname, username, email});
            res.status(201).json({newUser});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

    // Method to update a user
    updateUser: async (req, res) => {
        const {id} = req.params;
        const {fname, lname, email} = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(id, {fname, lname, email});
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}

export default UserController;