import Listing from '../models/Listings.mjs';
import { listingValidation, ListingValidation } from '../validators/ListingValidation.mjs'
import { handleValidationErrors } from '../validators/HandleValidationErrors.mjs';

const ListingController = {
    // Method to get ALL listing
    getAllListing: async (req, res) => {
        try {
            const listings = await Listing.find();
            res.json(listings);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Method to create new listing
    createListing: [
        // input validation 
        ListingValidation,
        // handle validation error middleware
        handleValidationErrors,

        async (req, res) => {
            const { userID, title, price, condition, description } = req.body;
            try {
                const newListing = await Listing.create({ userID, title, price, condition, description });
                res.status(201).json({ newListing });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    ],

    // Method to update listing
    updateListing: [
        listingValidation,
        handleValidationErrors,
        async (req, res) => {
            const { id } = req.params;
            const { userID, title, price, condition, description } = req.body;

            try {
                const updatedListing = await Listing.findByIdAndUpdate(id, { userID, title, price, condition, description });
                res.json(updatedListing);
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        }
    ],

    // Method to delete listing
    deleteListing: async (req, res) => {
        const { id } = req.params;
        try {
            await Listing.findByIdAndDelete(id);
            res.json({ message: 'Listing deleted successfully' })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

export default ListingController;