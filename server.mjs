import { connectDB } from './config/conn.mjs';;
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Initialize app variable with express
const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Web Server listening on port: ${PORT}`);
})
