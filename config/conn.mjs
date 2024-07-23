// Import Modules
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.mongoURI;

export async function connectDB() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(db);
    
        console.log('Mongo DB Connected...');
    } catch (error) {
        console.error(error.message);

        process.exit(1);
    };
}