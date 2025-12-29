import { Request, Response } from 'express';
import { kategoriService } from '../services';
import { successResponse, createdResponse } from '../utils/response';
import { KategoriInput } from '../utils/validation';

export async function getAll(req: Request, res: Response): Promise<void> {
  const withCount = req.query.withCount === 'true';

  const data = withCount
    ? await kategoriService.getAllKategoriWithCount()
    : await kategoriService.getAllKategori();

  successResponse(res, data, 'Berhasil mendapatkan kategori');
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await kategoriService.getKategoriById(id);
  successResponse(res, data, 'Berhasil mendapatkan kategori');
}

export async function create(req: Request, res: Response): Promise<void> {
  const data: KategoriInput = req.body;
  const result = await kategoriService.createKategori(data);
  createdResponse(res, result, 'Kategori berhasil dibuat');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data: KategoriInput = req.body;
  const result = await kategoriService.updateKategori(id, data);
  successResponse(res, result, 'Kategori berhasil diupdate');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await kategoriService.deleteKategori(id);
  successResponse(res, null, 'Kategori berhasil dihapus');
}
