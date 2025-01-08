import { IRouterProvider } from "@myTypes/Interfaces";
import { Router } from "express";

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