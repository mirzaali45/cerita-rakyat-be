import { Router } from 'express';
import { quizController } from '../controllers';
import { authMiddleware, adminMiddleware, asyncHandler, validate } from '../middlewares';
import { quizSchema, submitQuizSchema } from '../utils/validation';

const router = Router();

// Public (client - without answers)
router.get('/cerita/:ceritaId', asyncHandler(quizController.getByCeritaId));

// User (authenticated)
router.post('/submit', authMiddleware, validate(submitQuizSchema), asyncHandler(quizController.submit));
router.get('/hasil', authMiddleware, asyncHandler(quizController.getAllResults));
router.get('/hasil/:ceritaId', authMiddleware, asyncHandler(quizController.getResults));
router.get('/hasil/:ceritaId/best', authMiddleware, asyncHandler(quizController.getBestResult));

// Admin only
router.get('/admin/cerita/:ceritaId', authMiddleware, adminMiddleware, asyncHandler(quizController.getByCeritaIdAdmin));
router.get('/:id', authMiddleware, adminMiddleware, asyncHandler(quizController.getById));
router.post('/', authMiddleware, adminMiddleware, validate(quizSchema), asyncHandler(quizController.create));
router.put('/:id', authMiddleware, adminMiddleware, asyncHandler(quizController.update));
router.delete('/:id', authMiddleware, adminMiddleware, asyncHandler(quizController.remove));

export default router;
