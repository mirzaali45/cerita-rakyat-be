import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';

export async function getAllFavoritByUser(userId: string) {
  return prisma.favorit.findMany({
    where: { userId },
    include: {
      cerita: {
        include: {
          kategori: true,
          _count: {
            select: {
              scenes: true,
              favorit: true,
            },
          },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function isFavorited(userId: string, ceritaId: string) {
  const favorit = await prisma.favorit.findUnique({
    where: {
      userId_ceritaId: { userId, ceritaId },
    },
  });

  return !!favorit;
}

export async function addFavorit(userId: string, ceritaId: string) {
  const cerita = await prisma.cerita.findUnique({
    where: { id: ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  const existing = await prisma.favorit.findUnique({
    where: {
      userId_ceritaId: { userId, ceritaId },
    },
  });

  if (existing) {
    throw new ApiError('Cerita sudah ada di favorit', 409);
  }

  return prisma.favorit.create({
    data: { userId, ceritaId },
    include: {
      cerita: {
        include: {
          kategori: true,
        },
      },
    },
  });
}

export async function removeFavorit(userId: string, ceritaId: string) {
  const existing = await prisma.favorit.findUnique({
    where: {
      userId_ceritaId: { userId, ceritaId },
    },
  });

  if (!existing) {
    throw new ApiError('Cerita tidak ada di favorit', 404);
  }

  return prisma.favorit.delete({
    where: {
      userId_ceritaId: { userId, ceritaId },
    },
  });
}

export async function toggleFavorit(userId: string, ceritaId: string) {
  const existing = await prisma.favorit.findUnique({
    where: {
      userId_ceritaId: { userId, ceritaId },
    },
  });

  if (existing) {
    await prisma.favorit.delete({
      where: {
        userId_ceritaId: { userId, ceritaId },
      },
    });
    return { isFavorited: false };
  }

  const cerita = await prisma.cerita.findUnique({
    where: { id: ceritaId },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  await prisma.favorit.create({
    data: { userId, ceritaId },
  });

  return { isFavorited: true };
}

export async function getFavoritCount(ceritaId: string) {
  return prisma.favorit.count({
    where: { ceritaId },
  });
}

export async function getUserFavoritCount(userId: string) {
  return prisma.favorit.count({
    where: { userId },
  });
}
