import { AppError } from "@units/Errors/AppError";
import { ZodError } from "zod";

export type ErrorType = Error & AppError & ZodError<any>