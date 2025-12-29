import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { env } from '../config/env';
import { badRequestResponse, conflictResponse, notFoundResponse, serverErrorResponse } from '../utils/response';

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;

  constructor(message: string, statusCode = 500, errors?: Record<string, string[]>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.name = 'ApiError';
  }
}

/**
 * Not found handler for undefined routes
 */
export function notFoundHandler(req: Request, res: Response): void {
  notFoundResponse(res, `Route ${req.method} ${req.path} tidak ditemukan`);
}

/**
 * Global error handler middleware
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (env.isDevelopment) {
    console.error('Error:', err);
  }

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    const errors: Record<string, string[]> = {};
    err.issues.forEach((issue) => {
      const path = issue.path.join('.') || 'field';
      if (!errors[path]) {
        errors[path] = [];
      }
      errors[path].push(issue.message);
    });

    badRequestResponse(res, 'Validasi gagal', errors);
    return;
  }

  // Handle Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    handlePrismaError(err as PrismaError, res);
    return;
  }

  if (err.name === 'PrismaClientValidationError') {
    badRequestResponse(res, 'Data tidak valid');
    return;
  }

  // Handle custom API errors
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  // Handle generic errors
  serverErrorResponse(
    res,
    env.isDevelopment ? err.message : 'Terjadi kesalahan server'
  );
}

interface PrismaError extends Error {
  code: string;
  meta?: { target?: string[] };
}

function handlePrismaError(err: PrismaError, res: Response): void {
  switch (err.code) {
    case 'P2002': {
      const target = err.meta?.target || [];
      const field = target.join(', ');
      conflictResponse(res, `${field} sudah digunakan`);
      return;
    }
    case 'P2003': {
      badRequestResponse(res, 'Referensi data tidak valid');
      return;
    }
    case 'P2025': {
      notFoundResponse(res, 'Data tidak ditemukan');
      return;
    }
    default: {
      serverErrorResponse(res, 'Database error');
      return;
    }
  }
}

/**
 * Async handler wrapper
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
