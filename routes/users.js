// Import models
import UserController from '../controllers/UserController.mjs';

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to CREATE new user
router.post('/users', UserController.createUser);
// Route to UPDATE user
router.update('/users', UserController.updateUser);

export default router;