import { Router } from 'express';
import { authController } from '../controllers';
import { authMiddleware, asyncHandler, validate } from '../middlewares';
import { registerSchema, loginSchema, updateProfileSchema, changePasswordSchema } from '../utils/validation';

const router = Router();

router.post('/register', validate(registerSchema), asyncHandler(authController.register));
router.post('/login', validate(loginSchema), asyncHandler(authController.login));
router.get('/profile', authMiddleware, asyncHandler(authController.getProfile));
router.put('/profile', authMiddleware, validate(updateProfileSchema), asyncHandler(authController.updateProfile));
router.put('/change-password', authMiddleware, validate(changePasswordSchema), asyncHandler(authController.changePassword));

export default router;
