import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { KategoriInput } from '../utils/validation';

export async function getAllKategori() {
  return prisma.kategori.findMany({
    orderBy: { nama: 'asc' },
  });
}

export async function getAllKategoriWithCount() {
  return prisma.kategori.findMany({
    include: {
      _count: {
        select: { cerita: true },
      },
    },
    orderBy: { nama: 'asc' },
  });
}

export async function getKategoriById(id: string) {
  const kategori = await prisma.kategori.findUnique({
    where: { id },
    include: {
      _count: {
        select: { cerita: true },
      },
    },
  });

  if (!kategori) {
    throw new ApiError('Kategori tidak ditemukan', 404);
  }

  return kategori;
}

export async function createKategori(data: KategoriInput) {
  const existing = await prisma.kategori.findUnique({
    where: { nama: data.nama },
  });

  if (existing) {
    throw new ApiError('Kategori dengan nama ini sudah ada', 409);
  }

  return prisma.kategori.create({
    data: {
      nama: data.nama,
      icon: data.icon,
    },
  });
}

export async function updateKategori(id: string, data: KategoriInput) {
  const existing = await prisma.kategori.findFirst({
    where: {
      nama: data.nama,
      NOT: { id },
    },
  });

  if (existing) {
    throw new ApiError('Kategori dengan nama ini sudah ada', 409);
  }

  return prisma.kategori.update({
    where: { id },
    data: {
      nama: data.nama,
      icon: data.icon,
    },
  });
}

export async function deleteKategori(id: string) {
  const kategori = await prisma.kategori.findUnique({
    where: { id },
    include: {
      _count: {
        select: { cerita: true },
      },
    },
  });

  if (!kategori) {
    throw new ApiError('Kategori tidak ditemukan', 404);
  }

  if (kategori._count.cerita > 0) {
    throw new ApiError('Tidak dapat menghapus kategori yang memiliki cerita', 400);
  }

  return prisma.kategori.delete({
    where: { id },
  });
}
