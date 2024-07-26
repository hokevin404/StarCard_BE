import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true,
        minLength: 2
    },
    lname: {
        type: String,
        required: true,
        minLength: 2
    },
    username: {
        type: String,
        required: true,
        unique: true,
        immutable: true,
        minLength: 3,
        maxLength: 20
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Invalid email address']
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    },
    isActive: { 
        type: Boolean, 
        default: true 
    }
})

const User = mongoose.model('user', UserSchema);

export default User;