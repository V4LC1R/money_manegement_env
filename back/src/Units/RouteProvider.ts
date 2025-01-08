import { Router } from "express";
import { IRouterProvider } from "../@types/Interfaces";

export class RouteProvider implements IRouterProvider {
  routes: Router = Router();

  constructor() {
    this.register();
  }

  register() {}

  getRoutes(): Router {
    return this.routes;
  }
}