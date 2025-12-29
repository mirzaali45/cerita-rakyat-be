import { prisma } from '../config/database';
import { ApiError } from '../middlewares/error.middleware';
import { hashPassword, comparePassword } from '../utils/password';
import { generateToken } from '../utils/jwt';
import { RegisterInput, LoginInput, UpdateProfileInput } from '../utils/validation';
import { UserWithoutPassword, LoginResponse } from '../types';

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

export async function register(data: RegisterInput): Promise<LoginResponse> {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new ApiError('Email sudah terdaftar', 409);
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      nama: data.nama,
    },
    select: userSelect,
  });

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  return { user, token };
}

export async function login(data: LoginInput): Promise<LoginResponse> {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new ApiError('Email atau password salah', 401);
  }

  if (!user.isActive) {
    throw new ApiError('Akun tidak aktif', 403);
  }

  const isValidPassword = await comparePassword(data.password, user.password);

  if (!isValidPassword) {
    throw new ApiError('Email atau password salah', 401);
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
}

export async function getProfile(userId: string): Promise<UserWithoutPassword> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: userSelect,
  });

  if (!user) {
    throw new ApiError('User tidak ditemukan', 404);
  }

  return user;
}

export async function updateProfile(
  userId: string,
  data: UpdateProfileInput
): Promise<UserWithoutPassword> {
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      nama: data.nama,
      avatar: data.avatar,
    },
    select: userSelect,
  });

  return user;
}

export async function changePassword(
  userId: string,
  oldPassword: string,
  newPassword: string
): Promise<void> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError('User tidak ditemukan', 404);
  }

  const isValidPassword = await comparePassword(oldPassword, user.password);

  if (!isValidPassword) {
    throw new ApiError('Password lama tidak sesuai', 400);
  }

  const hashedPassword = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });
}
