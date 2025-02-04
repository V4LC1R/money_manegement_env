import { Request, Response } from 'express';

export abstract class aBaseErrorHandler<T extends Error = Error> {
    static hadleName: string; // Nome do handler

    // Método abstrato que deve ser implementado pelas classes filhas
    abstract format(err: T, req: Request, res: Response): void;

    // Método opcional para verificar se o handler pode tratar o erro
    canHandle(err: Error): boolean {
        return err instanceof Error; // Por padrão, todos os handlers podem tratar qualquer erro
    }
}