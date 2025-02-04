import { aBaseErrorHandler } from '@myTypes/Abstracts/aBaseErrorHandler';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

export class ZodErrorHandler extends aBaseErrorHandler<ZodError> {
    name = 'ZodErrorHandler';
    // Verifica se o erro é uma instância de ZodError
    canHandle(err: Error): boolean {
        return err instanceof ZodError;
    }

    // Formata o erro do Zod
    format(err: ZodError, req: Request, res: Response) {
        console.log(err);
        return res.status(400).json({
            status: 'Validation Error',
            message: 'Erro de validação',
            errors: err.errors.map((e) => ({
                path: e.path.join('.'),
                message: e.message,
            })),
        });
    }
}
