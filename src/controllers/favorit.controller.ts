import { Request, Response } from 'express';
import { favoritService } from '../services';
import { successResponse, createdResponse } from '../utils/response';

export async function getAll(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data = await favoritService.getAllFavoritByUser(userId);
  successResponse(res, data, 'Berhasil mendapatkan favorit');
}

export async function check(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const isFavorited = await favoritService.isFavorited(userId, ceritaId);
  successResponse(res, { isFavorited }, 'Berhasil mengecek favorit');
}

export async function add(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const result = await favoritService.addFavorit(userId, ceritaId);
  createdResponse(res, result, 'Berhasil menambahkan ke favorit');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  await favoritService.removeFavorit(userId, ceritaId);
  successResponse(res, null, 'Berhasil menghapus dari favorit');
}

export async function toggle(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;
  const { ceritaId } = req.params;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const result = await favoritService.toggleFavorit(userId, ceritaId);
  successResponse(res, result, 'Status favorit berhasil diubah');
}

export async function getCount(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const count = await favoritService.getFavoritCount(ceritaId);
  successResponse(res, { count }, 'Berhasil mendapatkan jumlah favorit');
}
