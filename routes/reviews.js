// import models
import ReviewController from "../controllers/ReviewsController.mjs";

// import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to get all reviews of a user
router.get('/:userID', ReviewController.getReviews);

export default router;