import Listing from '../models/Listings.mjs';

const ListingController = {
    // Method to create new listing
    createListing: async (req ,res) => {
        const {userID, title, price, condition, description} = req.body;
        try {
            const newListing = await Listing.create({userID, title, price, condition, description});
            res.status(201).json({newListing});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

    // Method to update listing
    updateListing: async (req, res) => {
        const {id} = req.params;
        const {userID, title, price, condition, description} = req.body;

        try {
            const updatedListing = await Listing.findByIdAndUpdate(id, {userID, title, price, condition, description});
            res.json(updatedListing);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    },

    // Method to delete listing
    deleteListing: async (req, res) => {
        const {id} = req.params;
        try {
            await Listing.findByIdAndDelete(id);
            res.json({message: 'Listing deleted successfully'})
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
}

export default ListingController;