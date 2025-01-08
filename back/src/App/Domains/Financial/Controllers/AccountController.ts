import { Request, Response } from "express";
import { AccountService } from "../Services/AccountService";

export class AccontController {
  async index(request: Request, response: Response) {
    try {
        const accounts = await AccountService.getAccounts();

        return response.status(200).json(accounts);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}