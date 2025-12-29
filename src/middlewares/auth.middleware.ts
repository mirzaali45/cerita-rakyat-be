import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';
import { prisma } from '../config/database';
import { unauthorizedResponse } from '../utils/response';

// Type declaration untuk Express Request
type AuthUser = {
  userId: string;
  email: string;
  role: string;
};

declare module 'express' {
  interface Request {
    user?: AuthUser;
  }
}

/**
 * Authentication middleware
 * Verifies JWT token and attaches user to request
 */
export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      unauthorizedResponse(res, 'Token tidak ditemukan');
      return;
    }

    const decoded = verify(token, env.JWT_SECRET) as JwtPayload;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId as string },
      select: { id: true, email: true, role: true, isActive: true },
    });

    if (!user) {
      unauthorizedResponse(res, 'User tidak ditemukan');
      return;
    }

    if (!user.isActive) {
      unauthorizedResponse(res, 'Akun tidak aktif');
      return;
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    unauthorizedResponse(res, 'Token tidak valid atau sudah kadaluarsa');
    return;
  }
}

/**
 * Optional auth middleware
 */
export async function optionalAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (token) {
      const decoded = verify(token, env.JWT_SECRET) as JwtPayload;

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId as string },
        select: { id: true, email: true, role: true, isActive: true },
      });

      if (user && user.isActive) {
        req.user = {
          userId: user.id,
          email: user.email,
          role: user.role,
        };
      }
    }

    next();
  } catch {
    next();
  }
}
