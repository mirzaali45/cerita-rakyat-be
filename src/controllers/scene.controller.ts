import { Request, Response } from 'express';
import { sceneService } from '../services';
import { successResponse, createdResponse } from '../utils/response';
import { SceneInput, UpdateSceneInput, ReorderScenesInput } from '../utils/validation';

export async function getByCeritaId(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const data = await sceneService.getScenesByCeritaId(ceritaId);
  successResponse(res, data, 'Berhasil mendapatkan scenes');
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data = await sceneService.getSceneById(id);
  successResponse(res, data, 'Berhasil mendapatkan scene');
}

export async function create(req: Request, res: Response): Promise<void> {
  const data: SceneInput = req.body;
  const result = await sceneService.createScene(data);
  createdResponse(res, result, 'Scene berhasil dibuat');
}

export async function createAuto(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const { gambar, teks, audio } = req.body;
  const result = await sceneService.createSceneAuto(ceritaId, { gambar, teks, audio });
  createdResponse(res, result, 'Scene berhasil dibuat');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const data: UpdateSceneInput = req.body;
  const result = await sceneService.updateScene(id, data);
  successResponse(res, result, 'Scene berhasil diupdate');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await sceneService.deleteScene(id);
  successResponse(res, null, 'Scene berhasil dihapus');
}

export async function reorder(req: Request, res: Response): Promise<void> {
  const data: ReorderScenesInput = req.body;
  const result = await sceneService.reorderScenes(data);
  successResponse(res, result, 'Urutan scene berhasil diubah');
}

export async function bulkCreate(req: Request, res: Response): Promise<void> {
  const { ceritaId } = req.params;
  const { scenes } = req.body;
  const result = await sceneService.bulkCreateScenes(ceritaId, scenes);
  createdResponse(res, result, 'Scenes berhasil dibuat');
}
