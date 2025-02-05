import { Router } from 'express';
import { UserController } from '../Controllers/UserController';

export function AuthRoutes ():Router {
    const router = Router();

    const userController = new UserController();

    router.post("/register", userController.store)

    return router;
}