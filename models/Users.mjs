import mongoose, { Mongoose } from "mongoose";
import isEmail from 'validator/lib/isEmail.js';

const UserSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        unique: true,
        validat: [isEmail, 'Invalid email address']
    }
})

const User = mongoose.model('user', UserSchema);

export default User;