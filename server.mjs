// Import Functions
import UserController from './controllers/UserController.mjs';

// Import Modules
import { connectDB } from './config/conn.mjs';;
import dotenv from 'dotenv';
import express from 'express';

// Invoked to load .env variables to process.env object
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app variable with express
const app = express();

// Initialize PORT to imported PORT number, otherwise 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/users', UserController.createUser)

app
    .get('/', (req, res) => {
        res.send(`Welcome to The World`);
    })


app.listen(PORT, () => {
    console.log(`Web Server listening on port: ${PORT}`);
})
