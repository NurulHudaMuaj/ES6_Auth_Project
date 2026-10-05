import express from 'express';
import * as authController from '../controller/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/login', authController.login);
router.get('/profile', authenticate, authController.getProfile);
router.get('/dashboard', authenticate, authController.getDashboard);

export default router;