import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    toUserID: {
        type: String,
        required: true
    },
    fromUserID: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    review: {
        type: String,
        require: false,
        minLength: 5,
        maxLength: 250
    }
});

export default new mongoose.model("Review", reviewSchema);