import { Request, Response } from "express";
import { prisma } from "../config/database";
import { successResponse, errorResponse } from "../utils/response";

// Get all quiz results for current user
export const getAllQuizResults = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;

    const results = await prisma.quizResult.findMany({
      where: { userId },
      include: {
        cerita: {
          include: {
            kategori: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    successResponse(res, results);
  } catch (error) {
    errorResponse(res, "Gagal mengambil data quiz result");
  }
};

// Get quiz result by cerita ID
export const getQuizResultByCerita = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { ceritaId } = req.params;

    const result = await prisma.quizResult.findFirst({
      where: {
        userId,
        ceritaId,
      },
      orderBy: { createdAt: "desc" },
    });

    if (!result) {
      return errorResponse(res, "Quiz result tidak ditemukan", 404);
    }

    successResponse(res, result);
  } catch (error) {
    errorResponse(res, "Gagal mengambil quiz result");
  }
};

// Submit quiz result
export const submitQuizResult = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { ceritaId, score, totalQuestions } = req.body;

    // Delete previous result if exists (optional: keep history)
    await prisma.quizResult.deleteMany({
      where: {
        userId,
        ceritaId,
      },
    });

    const result = await prisma.quizResult.create({
      data: {
        userId: userId!,
        ceritaId,
        score,
        totalQuestions,
      },
    });

    successResponse(res, result, "Quiz result berhasil disimpan");
  } catch (error) {
    errorResponse(res, "Gagal menyimpan quiz result");
  }
};