import { Request, Response } from 'express';
import { settingService } from '../services';
import { successResponse, createdResponse } from '../utils/response';

export async function getAll(req: Request, res: Response): Promise<void> {
  const format = req.query.format as string;

  const data = format === 'object'
    ? await settingService.getSettingsObject()
    : await settingService.getAllSettings();

  successResponse(res, data, 'Berhasil mendapatkan settings');
}

export async function getByKey(req: Request, res: Response): Promise<void> {
  const { key } = req.params;
  const data = await settingService.getSettingByKey(key);
  successResponse(res, data, 'Berhasil mendapatkan setting');
}

export async function update(req: Request, res: Response): Promise<void> {
  const { key } = req.params;
  const { value } = req.body;
  const result = await settingService.updateSetting(key, value);
  successResponse(res, result, 'Setting berhasil diupdate');
}

export async function upsert(req: Request, res: Response): Promise<void> {
  const { key, value } = req.body;
  const result = await settingService.upsertSetting(key, value);
  createdResponse(res, result, 'Setting berhasil disimpan');
}

export async function remove(req: Request, res: Response): Promise<void> {
  const { key } = req.params;
  await settingService.deleteSetting(key);
  successResponse(res, null, 'Setting berhasil dihapus');
}

export async function bulkUpdate(req: Request, res: Response): Promise<void> {
  const { settings } = req.body;
  const result = await settingService.bulkUpdateSettings(settings);
  successResponse(res, result, 'Settings berhasil diupdate');
}
