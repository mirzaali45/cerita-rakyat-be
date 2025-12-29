import { Router } from 'express';
import { sceneController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
import { sceneSchema, updateSceneSchema, reorderScenesSchema } from '../utils/validation';

const router = Router();

// Public
router.get('/cerita/:ceritaId', asyncHandler(sceneController.getByCeritaId));
router.get('/:id', asyncHandler(sceneController.getById));

// Admin only
router.post('/', authMiddleware, adminMiddleware, validate(sceneSchema), asyncHandler(sceneController.create));
router.post('/cerita/:ceritaId', authMiddleware, adminMiddleware, asyncHandler(sceneController.createAuto));
router.post('/bulk/:ceritaId', authMiddleware, adminMiddleware, asyncHandler(sceneController.bulkCreate));
router.put('/reorder', authMiddleware, adminMiddleware, validate(reorderScenesSchema), asyncHandler(sceneController.reorder));
router.put('/:id', authMiddleware, adminMiddleware, validate(updateSceneSchema), asyncHandler(sceneController.update));
router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(sceneController.remove));

export default router;
