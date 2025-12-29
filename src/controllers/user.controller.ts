import { Request, Response } from 'express';
import { userService } from '../services';
import { successResponse, createdResponse, paginatedResponse } from '../utils/response';

export async function getAll(req: Request, res: Response): Promise<void> {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const role = req.query.role as 'ADMIN' | 'USER' | undefined;
  const isActive = req.query.isActive === undefined ? undefined : req.query.isActive === 'true';
  const search = req.query.search as string | undefined;

  const result = await userService.getAllUsers(
    { page, limit },
    { role, isActive, search }
  );

  paginatedResponse(
    res,
    result.data as unknown[],
    result.meta.total,
    result.meta.page,
    result.meta.limit,
    'Berhasil mendapatkan users'
  );
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await userService.getUserById(id);
  successResponse(res, data, 'Berhasil mendapatkan user');
}

export async function getWithStats(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await userService.getUserWithStats(id);
  successResponse(res, data, 'Berhasil mendapatkan user');
}

export async function create(req: Request, res: Response): Promise<void> {
  const { email, password, nama, role } = req.body;
  const result = await userService.createUser({ email, password, nama, role });
  createdResponse(res, result, 'User berhasil dibuat');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { email, nama, avatar, role, isActive } = req.body;
  const result = await userService.updateUser(id, { email, nama, avatar, role, isActive });
  successResponse(res, result, 'User berhasil diupdate');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await userService.deleteUser(id);
  successResponse(res, null, 'User berhasil dihapus');
}

export async function resetPassword(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { newPassword } = req.body;
  const result = await userService.resetUserPassword(id, newPassword);
  successResponse(res, result, 'Password berhasil direset');
}

export async function toggleStatus(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const result = await userService.toggleUserStatus(id);
  successResponse(res, result, 'Status user berhasil diubah');
}
