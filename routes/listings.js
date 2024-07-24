// Import models
import Listings from "../models/Listings.mjs";

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to create new listing
router.post('/', UserController.createUser);

export default router;