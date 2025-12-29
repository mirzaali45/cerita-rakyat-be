import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { SceneInput, UpdateSceneInput, ReorderScenesInput } from '../utils/validation';

export async function getScenesByCeritaId(ceritaId: string) {
  return prisma.scene.findMany({
    where: { ceritaId },
    orderBy: { urutan: 'asc' },
  });
}

export async function getSceneById(id: string) {
  const scene = await prisma.scene.findUnique({
    where: { id },
  });

  if (!scene) {
    throw new ApiError('Scene tidak ditemukan', 404);
  }

  return scene;
}

export async function createScene(data: SceneInput) {
  const cerita = await prisma.cerita.findUnique({
    where: { id: data.ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  const existingScene = await prisma.scene.findUnique({
    where: {
      ceritaId_urutan: {
        ceritaId: data.ceritaId,
        urutan: data.urutan,
      },
    },
  });

  if (existingScene) {
    throw new ApiError(`Scene dengan urutan ${data.urutan} sudah ada`, 409);
  }

  return prisma.scene.create({
    data: {
      urutan: data.urutan,
      gambar: data.gambar,
      teks: data.teks,
      audio: data.audio,
      ceritaId: data.ceritaId,
    },
  });
}

export async function createSceneAuto(ceritaId: string, data: Omit<SceneInput, 'urutan' | 'ceritaId'>) {
  const cerita = await prisma.cerita.findUnique({
    where: { id: ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  const lastScene = await prisma.scene.findFirst({
    where: { ceritaId },
    orderBy: { urutan: 'desc' },
  });

  const nextUrutan = (lastScene?.urutan || 0) + 1;

  return prisma.scene.create({
    data: {
      urutan: nextUrutan,
      gambar: data.gambar,
      teks: data.teks,
      audio: data.audio,
      ceritaId,
    },
  });
}

export async function updateScene(id: string, data: UpdateSceneInput) {
  const scene = await getSceneById(id);

  if (data.urutan && data.urutan !== scene.urutan) {
    const existingScene = await prisma.scene.findUnique({
      where: {
        ceritaId_urutan: {
          ceritaId: scene.ceritaId,
          urutan: data.urutan,
        },
      },
    });

    if (existingScene) {
      throw new ApiError(`Scene dengan urutan ${data.urutan} sudah ada`, 409);
    }
  }

  return prisma.scene.update({
    where: { id },
    data,
  });
}

export async function deleteScene(id: string) {
  await getSceneById(id);

  return prisma.scene.delete({
    where: { id },
  });
}

export async function reorderScenes(data: ReorderScenesInput) {
  const updates = data.scenes.map((scene) =>
    prisma.scene.update({
      where: { id: scene.id },
      data: { urutan: scene.urutan },
    })
  );

  await prisma.$transaction(updates);

  return getScenesByCeritaId(data.ceritaId);
}

export async function bulkCreateScenes(
  ceritaId: string,
  scenes: Array<{ gambar?: string | null; teks: string; audio?: string | null }>
) {
  const cerita = await prisma.cerita.findUnique({
    where: { id: ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  const lastScene = await prisma.scene.findFirst({
    where: { ceritaId },
    orderBy: { urutan: 'desc' },
  });

  let nextUrutan = (lastScene?.urutan || 0) + 1;

  const createdScenes = [];

  for (const scene of scenes) {
    const created = await prisma.scene.create({
      data: {
        urutan: nextUrutan,
        gambar: scene.gambar,
        teks: scene.teks,
        audio: scene.audio,
        ceritaId,
      },
    });
    createdScenes.push(created);
    nextUrutan++;
  }

  return createdScenes;
}
