// import { Request, Response, NextFunction } from 'express';
// import { ZodSchema } from 'zod';

// /**
//  * Validate request body against a Zod schema
//  */
// export function validate(schema: ZodSchema) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.body);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// /**
//  * Validate query parameters against a Zod schema
//  */
// export function validateQuery(schema: ZodSchema) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.query);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// /**
//  * Validate URL parameters against a Zod schema
//  */
// export function validateParams(schema: ZodSchema) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.params);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// }
import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Gunakan 'issues' bukan 'errors'
        const messages = error.issues.map((issue) => issue.message).join(", ");
        
        return res.status(400).json({
          success: false,
          message: messages,
          errors: error.issues,
        });
      }
      
      return res.status(400).json({
        success: false,
        message: "Validasi gagal",
      });
    }
  };
};