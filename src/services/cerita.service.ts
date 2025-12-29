import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { CeritaInput, UpdateCeritaInput } from '../utils/validation';
import { PaginatedResult, CeritaFilter, PaginationParams } from '../types';

const ceritaInclude = {
  kategori: true,
  _count: {
    select: {
      scenes: true,
      quizzes: true,
      favorit: true,
    },
  },
};

export async function getAllCerita(
  pagination: PaginationParams,
  filter: CeritaFilter
): Promise<PaginatedResult<unknown>> {
  const { page, limit } = pagination;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (filter.status) {
    where.status = filter.status;
  }

  if (filter.kategoriId) {
    where.kategoriId = filter.kategoriId;
  }

  if (filter.search) {
    where.OR = [
      { judul: { contains: filter.search, mode: 'insensitive' } },
      { deskripsi: { contains: filter.search, mode: 'insensitive' } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.cerita.findMany({
      where,
      include: ceritaInclude,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.cerita.count({ where }),
  ]);

  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getPublishedCerita(
  pagination: PaginationParams,
  filter: CeritaFilter
): Promise<PaginatedResult<unknown>> {
  return getAllCerita(pagination, { ...filter, status: 'PUBLISHED' });
}

export async function getCeritaById(id: string) {
  const cerita = await prisma.cerita.findUnique({
    where: { id },
    include: {
      kategori: true,
      scenes: {
        orderBy: { urutan: 'asc' },
      },
      quizzes: {
        include: {
          pilihan: true,
        },
        orderBy: { urutan: 'asc' },
      },
      _count: {
        select: {
          scenes: true,
          quizzes: true,
          favorit: true,
        },
      },
    },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  return cerita;
}

export async function getPublishedCeritaById(id: string) {
  const cerita = await getCeritaById(id);

  if (cerita.status !== 'PUBLISHED') {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  // NOTE: View count sekarang di-handle oleh endpoint /api/cerita/:id/view
  // Tidak auto increment di sini untuk menghindari double counting

  return cerita;
}

export async function createCerita(data: CeritaInput) {
  const kategori = await prisma.kategori.findUnique({
    where: { id: data.kategoriId },
  });

  if (!kategori) {
    throw new ApiError('Kategori tidak ditemukan', 404);
  }

  return prisma.cerita.create({
    data: {
      judul: data.judul,
      deskripsi: data.deskripsi,
      thumbnail: data.thumbnail,
      status: data.status || 'DRAFT',
      kategoriId: data.kategoriId,
    },
    include: ceritaInclude,
  });
}

export async function updateCerita(id: string, data: UpdateCeritaInput) {
  if (data.kategoriId) {
    const kategori = await prisma.kategori.findUnique({
      where: { id: data.kategoriId },
    });

    if (!kategori) {
      throw new ApiError('Kategori tidak ditemukan', 404);
    }
  }

  return prisma.cerita.update({
    where: { id },
    data,
    include: ceritaInclude,
  });
}

export async function deleteCerita(id: string) {
  await getCeritaById(id);

  return prisma.cerita.delete({
    where: { id },
  });
}

export async function publishCerita(id: string) {
  const cerita = await prisma.cerita.findUnique({
    where: { id },
    include: {
      _count: {
        select: { scenes: true },
      },
    },
  });

  if (!cerita) {
    throw new ApiError('Cerita tidak ditemukan', 404);
  }

  if (cerita._count.scenes === 0) {
    throw new ApiError('Cerita harus memiliki minimal 1 scene', 400);
  }

  return prisma.cerita.update({
    where: { id },
    data: { status: 'PUBLISHED' },
    include: ceritaInclude,
  });
}

export async function unpublishCerita(id: string) {
  return prisma.cerita.update({
    where: { id },
    data: { status: 'DRAFT' },
    include: ceritaInclude,
  });
}