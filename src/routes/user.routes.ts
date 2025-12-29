import { Router } from 'express';
import { userController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler } from '../middlewares';

const router = Router();

// All Admin only
router.get('/', authMiddleware, adminMiddleware, asyncHandler(userController.getAll));
router.get('/:id', authMiddleware, adminMiddleware, asyncHandler(userController.getById));
router.get('/:id/stats', authMiddleware, adminMiddleware, asyncHandler(userController.getWithStats));
router.post('/', authMiddleware, adminMiddleware, asyncHandler(userController.create));
router.put('/:id', authMiddleware, adminMiddleware, asyncHandler(userController.update));
router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(userController.remove));
router.put('/:id/reset-password', authMiddleware, adminMiddleware, asyncHandler(userController.resetPassword));
router.put('/:id/toggle-status', authMiddleware, adminMiddleware, asyncHandler(userController.toggleStatus));

export default router;
