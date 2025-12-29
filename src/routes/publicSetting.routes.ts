import { Router } from "express";
import { getPublicSettings } from "../controllers/publicSetting.controller";

const router = Router();

// No auth required - public endpoint
router.get("/", getPublicSettings);

export default router;