import { NextFunction, Router,Request,Response, ErrorRequestHandler } from "express";
import { ErrorType } from "./Types";

export interface IRepository<T> {
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}

export interface IRouterProvider{
    routes : Router
    register() : void
    getRoutes() : Router
}

export interface IErrorHandlerProvider {
  getErrorHandler:ErrorRequestHandler;
}