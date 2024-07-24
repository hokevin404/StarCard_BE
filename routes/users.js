// Import models
import UserController from '../controllers/UserController.mjs';

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

router.post('/users', UserController.createUser);

export default router;