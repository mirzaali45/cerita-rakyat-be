import { Response } from 'express';

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function successResponse<T>(
  res: Response,
  data: T,
  message = 'Success'
): void {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  res.status(200).json(response);
}

export function createdResponse<T>(
  res: Response,
  data: T,
  message = 'Created successfully'
): void {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  res.status(201).json(response);
}

export function paginatedResponse<T>(
  res: Response,
  data: T[],
  total: number,
  page: number,
  limit: number,
  message = 'Success'
): void {
  const response: ApiResponse<T[]> = {
    success: true,
    message,
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
  res.status(200).json(response);
}

export function errorResponse(
  res: Response,
  message: string,
  statusCode = 500,
  errors?: Record<string, string[]>
): void {
  const response: ApiResponse = {
    success: false,
    message,
    errors,
  };
  res.status(statusCode).json(response);
}

export function badRequestResponse(
  res: Response,
  message = 'Bad request',
  errors?: Record<string, string[]>
): void {
  errorResponse(res, message, 400, errors);
}

export function unauthorizedResponse(
  res: Response,
  message = 'Unauthorized'
): void {
  errorResponse(res, message, 401);
}

export function forbiddenResponse(
  res: Response,
  message = 'Forbidden'
): void {
  errorResponse(res, message, 403);
}

export function notFoundResponse(
  res: Response,
  message = 'Not found'
): void {
  errorResponse(res, message, 404);
}

export function conflictResponse(
  res: Response,
  message = 'Conflict'
): void {
  errorResponse(res, message, 409);
}

export function serverErrorResponse(
  res: Response,
  message = 'Internal server error'
): void {
  errorResponse(res, message, 500);
}
