import { IErrorHandlerProvider } from '@myTypes/Interfaces';
import { ErrorType } from '@myTypes/Types';

import { AppErrorHandler } from '@units/Errors/Handle/AppErrorHandle';
import { GenericErrorHandler } from '@units/Errors/Handle/GenericErrorHandle';
import { ZodErrorHandler } from '@units/Errors/Handle/ZodErrorHandler';

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

class ErrorProvider implements IErrorHandlerProvider {
    private handlers = {
      [AppErrorHandler.name]: AppErrorHandler,
      [ZodError.name]:  ZodErrorHandler,
      [GenericErrorHandler.name]: GenericErrorHandler,
      [Error.name]: GenericErrorHandler,
    };

    getErrorHandler: ErrorRequestHandler = (err: ErrorType, req: Request, res: Response, next: NextFunction) =>
    {
      // Encontra o handler que pode tratar o erro
      const handler = this.handlers[err.name] ?? GenericErrorHandler;

      // Formata o erro
      (new handler()).format(err, req, res);

    }

    static init():ErrorRequestHandler{
      return new ErrorProvider().getErrorHandler
    }
}

export const appError = ErrorProvider.init()