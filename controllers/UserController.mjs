import User from '../models/Users.mjs';
import { v4 as uuidv4 } from 'uuid';
import { userValidationSchema } from '../validators/UserValidationSchema.mjs';
import { handleValidationErrors } from '../validators/HandleValidationErrors.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserController = {
    // Method to create a new user
    createUser: [
        // validation middleware
        userValidationSchema,
        // handle validation error middleware
        handleValidationErrors,
        async (req, res) => {
        // Destructure body of request
        const {fname, lname, username, email, password} = req.body;

        try {
            // Check for existing username
            let userExist = await User.findOne({username});
            if(userExist)
                return res.status(400).json({errors: [{msg: 'Username already exist'}]});

            // Check for existing email
            let emailExist = await User.findOne({email});
            if(emailExist)
                return res.status(400).json({errors: [{msg: 'Email already exist'}]});

            // Encrypt user password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            // Use mongoose method to create new user
            const newUser = await User.create({
                userID: uuidv4(), 
                fname, 
                lname, 
                username,
                password,
                email,
                password: hashedPassword,
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true
            });

            // Create JWT payload
            const payload = {
                user: {
                    id: newUser.userID,
                    fname: newUser.fname,
                    lname: newUser.lname
                }
            };

            // Sign JWT and return it
            jwt.sign(
                payload,
                process.env.jwtSecret,
                {expiresIn: '1hr'},
                (error, token) => {
                    if(error) {
                        console.error(error);
                        return res.status(500).json({errors: [{msg: 'Server error'}]});
                    }
                    res.status(201).json({token});
                }
            );
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }],

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