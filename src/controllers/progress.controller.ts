import { Request, Response } from "express";
import { prisma } from "../config/database";
import { successResponse, errorResponse } from "../utils/response";

// Get all progress for current user
export const getAllProgress = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    const progress = await prisma.progress.findMany({
      where: { userId },
      include: {
        cerita: {
          include: {
            kategori: true,
            scenes: {
              select: { id: true },
            },
          },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    successResponse(res, progress);
  } catch (error) {
    errorResponse(res, "Gagal mengambil data progress");
  }
};

// Get progress by cerita ID
export const getProgressByCerita = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { ceritaId } = req.params;

    const progress = await prisma.progress.findUnique({
      where: {
        userId_ceritaId: {
          userId: userId!,
          ceritaId,
        },
      },
    });

    if (!progress) {
      return errorResponse(res, "Progress tidak ditemukan", 404);
    }

    successResponse(res, progress);
  } catch (error) {
    errorResponse(res, "Gagal mengambil progress");
  }
};

// Create or update progress
export const upsertProgress = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { ceritaId, lastSceneUrutan, completed } = req.body;

    const progress = await prisma.progress.upsert({
      where: {
        userId_ceritaId: {
          userId: userId!,
          ceritaId,
        },
      },
      update: {
        lastSceneUrutan,
        completed: completed || false,
      },
      create: {
        userId: userId!,
        ceritaId,
        lastSceneUrutan,
        completed: completed || false,
      },
    });

    successResponse(res, progress, "Progress berhasil disimpan");
  } catch (error) {
    errorResponse(res, "Gagal menyimpan progress");
  }
};