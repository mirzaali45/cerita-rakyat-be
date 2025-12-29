import { Request, Response, NextFunction } from 'express';
import { forbiddenResponse } from '../utils/response';

/**
 * Admin middleware
 * Must be used after authMiddleware
 */
export function adminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.user) {
    forbiddenResponse(res, 'Unauthorized');
    return;
  }

  if (req.user.role !== 'ADMIN') {
    forbiddenResponse(res, 'Akses hanya untuk admin');
    return;
  }

  next();
}
