// Import models
import UserController from '../controllers/UserController.mjs';
// import middleware
import auth from '../middleware/auth.mjs';
// Import modules
import express from 'express';

// Initialize router as express Router()
const router = express.Router();

// Route to CREATE new user
router.post('/register', UserController.createUser);
// Route to Login
router.post('/login', UserController.loginUser);

// Route to GET user
router.get('/:id', auth, UserController.getUser);
// Route to UPDATE user
router.put('/:id', auth, UserController.updateUser);
// Route to DELETE user
router.delete('/:id', auth, UserController.deleteUser);

export default router;