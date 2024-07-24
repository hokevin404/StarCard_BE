import Reviews from "../models/Reviews.mjs";

const ReviewController = {
    // Method to get user review
    getReview: async (req, res) => {
        const toUserID = req.params;
        try {
            const reviews = await Reviews.find({ toUserID });

            if (!reviews)
                return res.status(404).json({ error: error.message });

            res.json(reviews);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default ReviewController;