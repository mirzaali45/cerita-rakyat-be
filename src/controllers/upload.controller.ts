// import { Request, Response } from 'express';
// import { uploadService } from '../services';
// import { successResponse } from '../utils/response';

// export async function uploadImage(req: Request, res: Response): Promise<void> {
//   if (!req.file) {
//     res.status(400).json({ success: false, message: 'File tidak ditemukan' });
//     return;
//   }

//   const url = await uploadService.uploadImage(req.file);
//   successResponse(res, { url }, 'Gambar berhasil diupload');
// }

// export async function uploadAudio(req: Request, res: Response): Promise<void> {
//   if (!req.file) {
//     res.status(400).json({ success: false, message: 'File tidak ditemukan' });
//     return;
//   }

//   const url = await uploadService.uploadAudio(req.file);
//   successResponse(res, { url }, 'Audio berhasil diupload');
// }

// export async function uploadMultipleImages(req: Request, res: Response): Promise<void> {
//   const files = req.files as Express.Multer.File[];

//   if (!files || files.length === 0) {
//     res.status(400).json({ success: false, message: 'File tidak ditemukan' });
//     return;
//   }

//   const urls: string[] = [];
//   for (const file of files) {
//     const url = await uploadService.uploadImage(file);
//     urls.push(url);
//   }

//   successResponse(res, { urls }, 'Gambar berhasil diupload');
// }

// export async function deleteFile(req: Request, res: Response): Promise<void> {
//   const { url } = req.body;

//   if (!url) {
//     res.status(400).json({ success: false, message: 'URL tidak ditemukan' });
//     return;
//   }

//   await uploadService.deleteFileFromStorage(url);
//   successResponse(res, null, 'File berhasil dihapus');
// }
import { Request, Response } from "express";
import { uploadService } from "../services/upload.service";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    const url = await uploadService.uploadImage(req.file);

    res.json({
      success: true,
      message: "Image uploaded successfully",
      data: { url },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to upload image",
    });
  }
};

export const uploadAudio = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No audio file provided",
      });
    }

    const url = await uploadService.uploadAudio(req.file);

    res.json({
      success: true,
      message: "Audio uploaded successfully",
      data: { url },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to upload audio",
    });
  }
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "No URL provided",
      });
    }

    await uploadService.deleteFile(url);

    res.json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete file",
    });
  }
};