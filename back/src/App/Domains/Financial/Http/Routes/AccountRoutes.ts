
import { Router } from 'express';
import { AccountController } from '../Controllers/AccountController';

export function AccountRoutes():Router {
    const router = Router();

    const accountController = new AccountController();

    router.get("/", accountController.index);
    router.get("/:id",accountController.show)
    router.post("/", accountController.store)
    router.delete("/:id", accountController.destroy)
    router.put("/:id", accountController.update)

    return router;
}