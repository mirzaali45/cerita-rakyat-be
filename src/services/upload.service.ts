// import cloudinary from "../config/cloudinary";
import { Readable } from "stream";
import cloudinary from "../config/cloudinary";

// Helper: Buffer to Stream
const bufferToStream = (buffer: Buffer): Readable => {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
};

// Upload to Cloudinary
const uploadToCloudinary = (
  buffer: Buffer,
  folder: string,
  resourceType: "image" | "video" | "raw" | "auto" = "auto"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `cerita-rakyat/${folder}`,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve(result.secure_url);
        } else {
          reject(new Error("Upload failed"));
        }
      }
    );

    bufferToStream(buffer).pipe(uploadStream);
  });
};

// Delete from Cloudinary
const deleteFromCloudinary = async (url: string): Promise<void> => {
  try {
    // Extract public_id from URL
    const parts = url.split("/");
    const folderIndex = parts.findIndex((p) => p === "cerita-rakyat");
    if (folderIndex !== -1) {
      const publicIdWithExt = parts.slice(folderIndex).join("/");
      const publicId = publicIdWithExt.replace(/\.[^/.]+$/, ""); // Remove extension
      await cloudinary.uploader.destroy(publicId);
    }
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
  }
};

export const uploadService = {
  // Upload Image
  uploadImage: async (file: Express.Multer.File): Promise<string> => {
    if (!file) {
      throw new Error("No file provided");
    }
    return uploadToCloudinary(file.buffer, "images", "image");
  },

  // Upload Audio
  uploadAudio: async (file: Express.Multer.File): Promise<string> => {
    if (!file) {
      throw new Error("No file provided");
    }
    return uploadToCloudinary(file.buffer, "audio", "video"); // Cloudinary uses 'video' for audio
  },

  // Delete File
  deleteFile: async (url: string): Promise<void> => {
    await deleteFromCloudinary(url);
  },
};