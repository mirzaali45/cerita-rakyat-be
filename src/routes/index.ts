import { Router } from 'express';
import authRoutes from './auth.routes';
import kategoriRoutes from './kategori.routes';
import ceritaRoutes from './cerita.routes';
import sceneRoutes from './scene.routes';
import quizRoutes from './quiz.routes';
import userRoutes from './user.routes';
import favoritRoutes from './favorit.routes';
import uploadRoutes from './upload.routes';
import settingRoutes from './setting.routes';
import progressRoutes from "./progress.routes";
import quizResultRoutes from "./quizResult.routes";
import publicSettingRoutes from "./publicSetting.routes";

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

router.use("/public/settings", publicSettingRoutes);

// API routes
router.use('/auth', authRoutes);
router.use('/kategori', kategoriRoutes);
router.use('/cerita', ceritaRoutes);
router.use('/scenes', sceneRoutes);
router.use('/quiz', quizRoutes);
router.use('/users', userRoutes);
router.use('/favorit', favoritRoutes);
router.use('/upload', uploadRoutes);
router.use('/settings', settingRoutes);
router.use("/progress", progressRoutes);
router.use("/quiz-results", quizResultRoutes);


export default router;
