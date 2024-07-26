// Import Modules
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Invoked to load .env variables to process.env object
dotenv.config();

// Initialize db to MongoDB URI
const db = process.env.mongoURI;

// Function to connect to database
export async function connectDB() {
    // Establish connection with database
    mongoose.connect(db);

    const conn = mongoose.connection;
    // Listens for connection errors
    conn.on('error', (e) => console.log(e));
    // Listens for successful connection
    conn.once('open', () => console.log(`Connected to MongoDB!`));
    // Listens for disconnection errors
    conn.on('disconnected', () => console.log(`Disconnected from MongoDB!`));
};