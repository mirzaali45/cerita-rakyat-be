// import { Router } from 'express';
// import multer from 'multer';
// import { uploadController } from '../controllers';
// import { authMiddleware, adminMiddleware, asyncHandler } from '../middlewares';

// const router = Router();

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 20 * 1024 * 1024, // 20MB max
//   },
// });

// // All Admin only
// router.post('/image', authMiddleware, adminMiddleware, upload.single('file'), asyncHandler(uploadController.uploadImage));
// router.post('/audio', authMiddleware, adminMiddleware, upload.single('file'), asyncHandler(uploadController.uploadAudio));
// router.post('/images', authMiddleware, adminMiddleware, upload.array('files', 10), asyncHandler(uploadController.uploadMultipleImages));
// router.delete('/', authMiddleware, adminMiddleware, asyncHandler(uploadController.deleteFile));

// export default router;
import { Router } from "express";
import { uploadImage, uploadAudio, deleteFile } from "../controllers/upload.controller";
import { upload } from "../config/multer";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// All routes require authentication
router.use(authMiddleware);

// Upload image (single file, field name: "image")
router.post("/image", upload.single("file"), uploadImage);

// Upload audio (single file, field name: "audio")
router.post("/audio", upload.single("file"), uploadAudio);

// Delete file
router.delete("/", deleteFile);

export default router;