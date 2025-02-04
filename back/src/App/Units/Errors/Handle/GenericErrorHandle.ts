import { aBaseErrorHandler } from '@myTypes/Abstracts/aBaseErrorHandler';
import { Request, Response } from 'express';
import { AppError } from '../AppError';

export class GenericErrorHandler extends aBaseErrorHandler<AppError> {
    name = 'GenericErrorHandler';
    format(err: Error, req: Request, res: Response) {
        return res.status(500).json({
            status: 'Generic Error',
            message: err.message,
        });
    }
}