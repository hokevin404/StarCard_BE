// Import Modules
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Invoked to load .env variables to process.env object
dotenv.config();

// Initialize db to MongoDB URI
const db = process.env.mongoURI;

// Function to connect to database
export async function connectDB() {
    mongoose.connect(db);

    const conn = mongoose.connection;
    conn.on('error', (e) => console.log(e));
    conn.once('open', () => console.log(`Connected to MongoDB!`));
    conn.off('close', () => console.log(`Disconnected from MongoDB!`));
};