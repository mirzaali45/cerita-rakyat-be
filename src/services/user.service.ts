import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { hashPassword } from '../utils/password';
import { PaginatedResult, PaginationParams, UserFilter } from '../types';

const userSelect = {
  id: true,
  email: true,
  nama: true,
  avatar: true,
  role: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
};

export async function getAllUsers(
  pagination: PaginationParams,
  filter: UserFilter
): Promise<PaginatedResult<unknown>> {
  const { page, limit } = pagination;
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (filter.role) {
    where.role = filter.role;
  }

  if (filter.isActive !== undefined) {
    where.isActive = filter.isActive;
  }

  if (filter.search) {
    where.OR = [
      { nama: { contains: filter.search, mode: 'insensitive' } },
      { email: { contains: filter.search, mode: 'insensitive' } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: userSelect,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count({ where }),
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

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: userSelect,
  });

  if (!user) {
    throw new ApiError('User tidak ditemukan', 404);
  }

  return user;
}

export async function getUserWithStats(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      ...userSelect,
      _count: {
        select: {
          progress: true,
          favorit: true,
          quizResults: true,
        },
      },
    },
  });

  if (!user) {
    throw new ApiError('User tidak ditemukan', 404);
  }

  return user;
}

export async function createUser(data: {
  email: string;
  password: string;
  nama: string;
  role?: 'ADMIN' | 'USER';
}) {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    throw new ApiError('Email sudah terdaftar', 409);
  }

  const hashedPassword = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      nama: data.nama,
      role: data.role || 'USER',
    },
    select: userSelect,
  });
}

export async function updateUser(
  id: string,
  data: {
    email?: string;
    nama?: string;
    avatar?: string | null;
    role?: 'ADMIN' | 'USER';
    isActive?: boolean;
  }
) {
  if (data.email) {
    const existing = await prisma.user.findFirst({
      where: {
        email: data.email,
        NOT: { id },
      },
    });

    if (existing) {
      throw new ApiError('Email sudah digunakan', 409);
    }
  }

  return prisma.user.update({
    where: { id },
    data,
    select: userSelect,
  });
}

export async function deleteUser(id: string) {
  const user = await getUserById(id);

  if (user.role === 'ADMIN') {
    const adminCount = await prisma.user.count({
      where: { role: 'ADMIN' },
    });

    if (adminCount <= 1) {
      throw new ApiError('Tidak dapat menghapus admin terakhir', 400);
    }
  }

  return prisma.user.delete({
    where: { id },
  });
}

export async function resetUserPassword(id: string, newPassword: string) {
  await getUserById(id);

  const hashedPassword = await hashPassword(newPassword);

  return prisma.user.update({
    where: { id },
    data: { password: hashedPassword },
    select: userSelect,
  });
}

export async function toggleUserStatus(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new ApiError('User tidak ditemukan', 404);
  }

  return prisma.user.update({
    where: { id },
    data: { isActive: !user.isActive },
    select: userSelect,
  });
}
