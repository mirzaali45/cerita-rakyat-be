import { Router } from 'express';
import { favoritController } from '../controllers';
import { authMiddleware, asyncHandler } from '../middlewares';

const router = Router();

// Public
router.get('/count/:ceritaId', asyncHandler(favoritController.getCount));

// User (authenticated)
router.get('/', authMiddleware, asyncHandler(favoritController.getAll));
router.get('/check/:ceritaId', authMiddleware, asyncHandler(favoritController.check));
router.post('/:ceritaId', authMiddleware, asyncHandler(favoritController.add));
router.delete('/:ceritaId', authMiddleware, asyncHandler(favoritController.remove));
router.put('/:ceritaId/toggle', authMiddleware, asyncHandler(favoritController.toggle));

export default router;
