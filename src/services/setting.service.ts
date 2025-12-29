import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';

export async function getAllSettings() {
  return prisma.appSetting.findMany({
    orderBy: { key: 'asc' },
  });
}

export async function getSettingsObject(): Promise<Record<string, string>> {
  const settings = await prisma.appSetting.findMany();

  return settings.reduce((acc: Record<string, string>, setting: { key: string; value: string }) => {
    acc[setting.key] = setting.value;
    return acc;
  }, {});
}

export async function getSettingByKey(key: string) {
  const setting = await prisma.appSetting.findUnique({
    where: { key },
  });

  if (!setting) {
    throw new ApiError('Setting tidak ditemukan', 404);
  }

  return setting;
}

export async function getSettingValue(key: string, defaultValue?: string): Promise<string | null> {
  const setting = await prisma.appSetting.findUnique({
    where: { key },
  });

  return setting?.value ?? defaultValue ?? null;
}

export async function upsertSetting(key: string, value: string) {
  return prisma.appSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
}

export async function updateSetting(key: string, value: string) {
  return prisma.appSetting.update({
    where: { key },
    data: { value },
  });
}

export async function deleteSetting(key: string) {
  return prisma.appSetting.delete({
    where: { key },
  });
}

export async function bulkUpdateSettings(settings: Array<{ key: string; value: string }>) {
  const updates = settings.map((s) =>
    prisma.appSetting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value },
    })
  );

  return prisma.$transaction(updates);
}

export async function isMaintenanceMode(): Promise<boolean> {
  const value = await getSettingValue('maintenance_mode', 'false');
  return value === 'true';
}
