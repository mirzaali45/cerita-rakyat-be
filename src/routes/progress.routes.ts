import { Router } from "express";
import {
  getAllProgress,
  getProgressByCerita,
  upsertProgress,
} from "../controllers/progress.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

router.get("/", getAllProgress);
router.get("/cerita/:ceritaId", getProgressByCerita);
router.post("/", upsertProgress);

export default router;