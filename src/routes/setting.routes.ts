import { Router } from 'express';
import { settingController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
import { settingSchema } from '../utils/validation';

const router = Router();

// Public
router.get('/', asyncHandler(settingController.getAll));
router.get('/:key', asyncHandler(settingController.getByKey));

// Admin only
router.post('/', authMiddleware, adminMiddleware, validate(settingSchema), asyncHandler(settingController.upsert));
router.put('/bulk', authMiddleware, adminMiddleware, asyncHandler(settingController.bulkUpdate));
router.put('/:key', authMiddleware, adminMiddleware, asyncHandler(settingController.update));
router.delete('/:key', authMiddleware, adminMiddleware, asyncHandler(settingController.remove));

export default router;
