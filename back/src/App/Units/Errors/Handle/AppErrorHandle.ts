import { Request, Response } from 'express';
import { AppError } from '../AppError';
import { aBaseErrorHandler } from '@myTypes/Abstracts/aBaseErrorHandler';

export class AppErrorHandler extends aBaseErrorHandler<AppError> {
  name = 'AppErrorHandler';
  canHandle(err: Error): boolean {
    return err instanceof AppError;
  }

  format(err: AppError, req: Request, res: Response) {
    res.status(err.statusCode).json({
      status: 'App Error',
      message: err.message,
    });
  }
}