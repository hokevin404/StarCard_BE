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
        min: 0
    },
    condition: {
        type: String,
        required: true,
        enum: [
            'New',
            'Like New',
            'Very Good',
            'Good',
            'Not Good',
            'Damaged'
        ],
        message: '{VALUE} is not a valid condition'
    },
    description: {
        type: String,
        required: false,
        maxLength: 250
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
 },
 {
    timestamps: true // Automatically manages Date fields
});

userListing.index({title: 1})

 export default new mongoose.model("Listing", userListing);