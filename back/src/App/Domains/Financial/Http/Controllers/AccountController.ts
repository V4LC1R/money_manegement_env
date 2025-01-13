import { Request, Response } from "express";
import { AccountService } from "../../Services/AccountService";
import { AccountCreateOneSchema } from "prisma/generated/schemas";

export class AccountController {
  async index(request: Request, response: Response,):Promise<any> {
    try {
        const data = request.params;

        const accounts = await AccountService.getAccounts(data);

        const status = accounts && accounts?.length > 0  ? 200 : 204

        return response.status(status).json(accounts);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  async show(request:Request, response:Response): Promise<any> {
    try{
      const {id} = request.params

      const account = await AccountService.getAccount(parseInt(id))

      const status = account ? 200 : 204

      return response.status(status).json(status)
    }catch(error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }

  async store(request:Request, response:Response): Promise<any> {
    try{
      const {body} = request

      const {data} = AccountCreateOneSchema.parse(body)

      const account = await AccountService.create(data)

      const status = account ? 200 : 204

      return response.status(status).json(status)
    }catch(error) {
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}