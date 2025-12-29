import { Request, Response } from 'express';
import { authService } from '../services';
import { successResponse, createdResponse } from '../utils/response';
import { RegisterInput, LoginInput, UpdateProfileInput } from '../utils/validation';

export async function register(req: Request, res: Response): Promise<void> {
  const data: RegisterInput = req.body;
  const result = await authService.register(data);
  createdResponse(res, result, 'Registrasi berhasil');
}

export async function login(req: Request, res: Response): Promise<void> {
  const data: LoginInput = req.body;
  const result = await authService.login(data);
  successResponse(res, result, 'Login berhasil');
}

export async function getProfile(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const profile = await authService.getProfile(userId);
  successResponse(res, profile, 'Berhasil mendapatkan profil');
}

export async function updateProfile(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const data: UpdateProfileInput = req.body;
  const profile = await authService.updateProfile(userId, data);
  successResponse(res, profile, 'Profil berhasil diupdate');
}

export async function changePassword(req: Request, res: Response): Promise<void> {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  const { oldPassword, newPassword } = req.body;
  await authService.changePassword(userId, oldPassword, newPassword);
  successResponse(res, null, 'Password berhasil diubah');
}
