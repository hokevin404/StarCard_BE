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
    }
}

export default ListingController;