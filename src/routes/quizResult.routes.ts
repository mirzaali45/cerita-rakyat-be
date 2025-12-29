import { Router } from "express";
import {
  getAllQuizResults,
  getQuizResultByCerita,
  submitQuizResult,
} from "../controllers/quizResult.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

router.get("/", getAllQuizResults);
router.get("/cerita/:ceritaId", getQuizResultByCerita);
router.post("/", submitQuizResult);

export default router;