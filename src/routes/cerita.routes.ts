// import { Router } from 'express';
// import { ceritaController } from '../controllers';
// import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
// import { ceritaSchema, updateCeritaSchema } from '../utils/validation';
// import { incrementView } from '../controllers/cerita.controller';

// const router = Router();

// // Public
// router.get('/', asyncHandler(ceritaController.getAll));
// router.get('/:id', asyncHandler(ceritaController.getById));

// // Admin only
// router.get('/admin/all', authMiddleware, adminMiddleware, asyncHandler(ceritaController.getAllAdmin));
// router.get('/admin/:id', authMiddleware, adminMiddleware, asyncHandler(ceritaController.getByIdAdmin));
// router.post('/', authMiddleware, adminMiddleware, validate(ceritaSchema), asyncHandler(ceritaController.create));
// router.put('/:id', authMiddleware, adminMiddleware, validate(updateCeritaSchema), asyncHandler(ceritaController.update));
// router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(ceritaController.remove));
// router.put('/:id/publish', authMiddleware, adminMiddleware, asyncHandler(ceritaController.publish));
// router.put('/:id/unpublish', authMiddleware, adminMiddleware, asyncHandler(ceritaController.unpublish));
// router.post("/:id/view", incrementView);

// export default router;
import { Router } from 'express';
import { ceritaController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
import { ceritaSchema, updateCeritaSchema } from '../utils/validation';
import { incrementView } from '../controllers/cerita.controller';

const router = Router();

// Public routes
router.get('/', asyncHandler(ceritaController.getAll));
router.get('/:id', asyncHandler(ceritaController.getById));

// Authenticated user - 1 user = 1 view per cerita
router.post('/:id/view', authMiddleware, asyncHandler(incrementView));

// Admin only
router.get('/admin/all', authMiddleware, adminMiddleware, asyncHandler(ceritaController.getAllAdmin));
router.get('/admin/:id', authMiddleware, adminMiddleware, asyncHandler(ceritaController.getByIdAdmin));
router.post('/', authMiddleware, adminMiddleware, validate(ceritaSchema), asyncHandler(ceritaController.create));
router.put('/:id', authMiddleware, adminMiddleware, validate(updateCeritaSchema), asyncHandler(ceritaController.update));
router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(ceritaController.remove));
router.put('/:id/publish', authMiddleware, adminMiddleware, asyncHandler(ceritaController.publish));
router.put('/:id/unpublish', authMiddleware, adminMiddleware, asyncHandler(ceritaController.unpublish));

export default router;