export class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    /**
     * Construtor da classe AppError.
     * @param message Mensagem de erro.
     * @param statusCode Código de status HTTP (padrão: 500).
     * @param isOperacional Indica se o erro é operacional (padrão: true).
     */
    constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
        super(message);

        this.statusCode = statusCode;
        this.isOperational = isOperational;

        // Garante que a stack trace seja capturada corretamente
        Error.captureStackTrace(this, this.constructor);
    }
}