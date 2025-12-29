import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env';
import { AuthUser } from '../types';

export function generateToken(payload: AuthUser): string {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  } as jwt.SignOptions);
}

export function verifyToken(token: string): AuthUser {
  const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload & AuthUser;
  return {
    userId: decoded.userId,
    email: decoded.email,
    role: decoded.role,
  };
}

export function decodeToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.decode(token) as JwtPayload & AuthUser;
    if (!decoded) return null;
    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };
  } catch {
    return null;
  }
}
