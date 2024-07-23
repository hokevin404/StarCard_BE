import mongoose from "mongoose";

const userListing = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    },
    price: {
        type: Number,
        required: true,
        minLength: 3
    },
    condition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        maxLength: 250,
    }
 });

userListing.index({title: 1})

 export default new mongoose.model("Listing", userListing);