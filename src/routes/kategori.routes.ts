import { Router } from 'express';
import { kategoriController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
import { kategoriSchema } from '../utils/validation';

const router = Router();

// Public
router.get('/', asyncHandler(kategoriController.getAll));
router.get('/:id', asyncHandler(kategoriController.getById));

// Admin only
router.post('/', authMiddleware, adminMiddleware, validate(kategoriSchema), asyncHandler(kategoriController.create));
router.put('/:id', authMiddleware, adminMiddleware, validate(kategoriSchema), asyncHandler(kategoriController.update));
router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(kategoriController.remove));

export default router;
