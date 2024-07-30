// Import models
import ListingController from "../controllers/ListingController.mjs";
// import middleware
import auth from '../middleware/auth.mjs'
// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to seed database
// router.post('/seed', ListingController.seedDB);

// Route to get ALL listings
router.get('/', ListingController.getAllListing);

// Route to get ALL listings from a user
router.get('/:id', ListingController.getUserListing)
// Route to create new listing
router.post('/', auth, ListingController.createListing);
// Route to update listing
router.put('/:id', auth, ListingController.updateListing);
// Route to delete listing
router.delete('/:id', auth, ListingController.deleteListing);

export default router;