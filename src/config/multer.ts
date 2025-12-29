import multer from "multer";
import path from "path";

// Store in memory (akan di-upload ke Cloudinary)
const storage = multer.memoryStorage();

// File filter
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  // Allowed image types
  const imageTypes = /jpeg|jpg|png|gif|webp/;
  // Allowed audio types
  const audioTypes = /mp3|mpeg|wav|ogg|m4a/;

  const extname = path.extname(file.originalname).toLowerCase().slice(1);
  const mimetype = file.mimetype;

  const isImage = imageTypes.test(extname) && mimetype.startsWith("image/");
  const isAudio = audioTypes.test(extname) && mimetype.startsWith("audio/");

  if (isImage || isAudio) {
    cb(null, true);
  } else {
    cb(new Error("Format file tidak didukung. Gunakan image (jpg, png, gif, webp) atau audio (mp3, wav, ogg)"));
  }
};

// Export multer instance
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max
  },
});