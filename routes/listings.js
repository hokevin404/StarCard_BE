// Import models
import ListingController from "../controllers/ListingController.mjs";

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to create new listing
router.post('/', ListingController.createListing);

export default router;