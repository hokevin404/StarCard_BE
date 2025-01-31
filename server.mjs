// Import Functions
import userRoutes from './routes/users.js';
import listingRoutes from './routes/listings.js';
import reviewRoutes from './routes/reviews.js';

// Import Modules
import { connectDB } from './config/conn.mjs';;
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// Invoked to load .env variables to process.env object
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app variable with express
const app = express();

// Initialize PORT to imported PORT number, otherwise 3001
const PORT = process.env.PORT || 3001;

// Mount cross-origin resource sharing (cors)
app.use(cors());
// Mount Expresss middleware parser
app.use(express.json());
// Mount user route
app.use('/api/users', userRoutes);
// Mount listing route
app.use('/api/listings', listingRoutes);
// Mount review route
app.use('/api/reviews', reviewRoutes);

app
    .get('/', (req, res) => {
        res.send(`Welcome to The World`);
    })


app.listen(PORT, () => {
    console.log(`Web Server listening on port: ${PORT}`);
})
