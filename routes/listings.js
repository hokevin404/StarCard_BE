// Import models
import ListingController from "../controllers/ListingController.mjs";

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to get ALL listings
router.get('/', ListingController.getAllListing);
// Route to create new listing
router.post('/', ListingController.createListing);
// Route to update listing
router.put('/:id', ListingController.updateListing);
// Route to delete listing
router.delete('/:id', ListingController.deleteListing);

export default router;