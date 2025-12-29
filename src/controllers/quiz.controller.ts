import { Request, Response } from 'express';
import { quizService } from '../services';
import { successResponse, createdResponse } from '../utils/response';
import { QuizInput, SubmitQuizInput } from '../utils/validation';

export async function getByCeritaIdAdmin(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const data = await quizService.getQuizzesByCeritaId(ceritaId);
  successResponse(res, data, 'Berhasil mendapatkan quiz');
}

export async function getByCeritaId(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const data = await quizService.getQuizzesForClient(ceritaId);
  successResponse(res, data, 'Berhasil mendapatkan quiz');
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await quizService.getQuizById(id);
  successResponse(res, data, 'Berhasil mendapatkan quiz');
}

export async function create(req: Request, res: Response): Promise<void> {
  const data: QuizInput = req.body;
  const result = await quizService.createQuiz(data);
  createdResponse(res, result, 'Quiz berhasil dibuat');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data: Partial<QuizInput> = req.body;
  const result = await quizService.updateQuiz(id, data);
  successResponse(res, result, 'Quiz berhasil diupdate');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await quizService.deleteQuiz(id);
  successResponse(res, null, 'Quiz berhasil dihapus');
}

export async function submit(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data: SubmitQuizInput = req.body;
  const result = await quizService.submitQuiz(userId, data);
  successResponse(res, result, 'Quiz berhasil disubmit');
}

export async function getResults(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data = await quizService.getQuizResults(userId, ceritaId);
  successResponse(res, data, 'Berhasil mendapatkan hasil quiz');
}

export async function getBestResult(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data = await quizService.getBestQuizResult(userId, ceritaId);
  successResponse(res, data, 'Berhasil mendapatkan hasil terbaik');
}

export async function getAllResults(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data = await quizService.getAllQuizResultsByUser(userId);
  successResponse(res, data, 'Berhasil mendapatkan semua hasil quiz');
}
