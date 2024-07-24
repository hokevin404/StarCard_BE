// Import models
import UserController from '../controllers/UserController.mjs';

// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to CREATE new user
router.post('/', UserController.createUser);
// Route to UPDATE user
router.put('/:id', UserController.updateUser);
// Route to DELETE user
router.delete('/:id', UserController.deleteUser);

export default router;