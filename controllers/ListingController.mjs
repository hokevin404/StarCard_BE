import Listing from '../models/Listings.mjs';
import { listingValidation } from '../validators/ListingValidation.mjs'
import { handleValidationErrors } from '../validators/HandleValidationErrors.mjs';

// const seedListings = [
//     {
//     "userID": "66a056094f6b40e84be40432",
//     "title": "YeonJun Fight or Escape Offical TxT",
//     "price": "10.00",
//     "condition": "Like New",
//     "description": "Offical TxT PC",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a35c9903c9082450186c6d",
//     "title": "Tzuyu Feel Special Twice",
//     "price": "14.99",
//     "condition": "New",
//     "description": "Tzuyu from Twice PC from the Feel Special Album",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a4210d8745dcbb498c3050",
//     "title": "Sana Feel Special Twice",
//     "price": "23.50",
//     "condition": "New",
//     "description": "Sana photocard from Twice's Feel Special Album",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a35c9903c9082450186c6d",
//     "title": "MoonByul Blue;s ",
//     "price": "6.98",
//     "condition": "Very Good",
//     "description": "From MaMaMoo, MoonByul's PC",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a5fa2068ffcb1c74226ec9",
//     "title": "Felix Stray Kids",
//     "price": "20.98",
//     "condition": "Like New",
//     "description": "Felic from Stray Kids PC. This was from the ATE album",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a056094f6b40e84be40432",
//     "title": "SuA VirtouS Dreamcatcher",
//     "price": "59.97",
//     "condition": "New",
//     "description": "From Dreamcatcher is SuA from their latest album VirtuoS",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a4210d8745dcbb498c3050",
//     "title": "Dami Virtuos Dreamcater",
//     "price": "6.99",
//     "condition": "Like New",
//     "description": "Dami from Dreamcatcher PC",
//      "imgURL": ""
//     },{
//     "userID": "66a36bc1e0e0bf56b4af1184",
//     "title": "LiSa BlackPink Square Up",
//     "price": "14.54",
//     "condition": "Very Good",
//     "description": "BlackPink's LiSa from their 1st album Square Up",
//      "imgURL": ""
//     },
//     {
//     "userID": "66a35c9903c9082450186c6d",
//     "title": "HanNi How Sweet New Jeans",
//     "price": "12.54",
//     "condition": "Good",
//     "description": "New Jean's HanNi PC",
//      "imgURL": ""
//     },
//     {
//       "userID": "66a4210d8745dcbb498c3050",
//       "title": "YuQi I Feel (G)I-dle",
//       "price": "4.56",
//       "condition": "Good",
//       "description": "YuQi PC from their album I Feel",
//      "imgURL": ""
//     },
//       {
//       "userID": "66a5fa2068ffcb1c74226ec9",
//       "title": "Minnie I Feel (G)I-dle",
//       "price": "7.56",
//       "condition": "Very Good",
//       "description": "Minnie PC from their album I Feel",
//      "imgURL": ""
//       },
//       {
//       "userID": "66a36bc1e0e0bf56b4af1184",
//       "title": "SeoHo Oneus Binary Code",
//       "price": "2.54",
//       "condition": "Not Good",
//       "description": "From the Binary Code is SeoHo's PC"
//       }
//   ];

const ListingController = {
    // // Method to see database
    // seedDB: async (req, res) => {
    //     try {
    //         await Listing.insertMany(seedListings);
    //         console.log(`Seed Listings`);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    // Method to get ALL listing
    getAllListing: async (req, res) => {
        try {
            const listings = await Listing.find();
            res.json(listings);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Method to get ALL user listing
    getUserListing: async (req, res) => {
        const userid = req.params.id;
        try {
            const listings = await Listing.find({userID: userid});
            res.json(listings);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    

    // Method to create new listing
    createListing: [
        // input validation 
        listingValidation,
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