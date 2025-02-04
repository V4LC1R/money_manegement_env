import {ZodError} from 'zod'
import { NextFunction, Request, Response } from "express";
import { AccountService } from "../../Services/AccountService";
import { AccountCreateOneSchema, AccountUpdateOneSchema } from "prisma/generated/schemas";

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

  async store(request:Request, response:Response,next:NextFunction): Promise<any> {
    try{
      const {body} = request

      console.log(body);

      const {data} = AccountCreateOneSchema.parse(body)

      const account = await AccountService.create(data)

      const status = account ? 201 : 204

      return response.status(status).json(status)
    }catch(error: ZodError | any) {

     return next(error);
    }
  }

  async destroy(request:Request, response:Response, next:NextFunction): Promise<any>
  {
    try{
      const {id} = request.params

      await AccountService.delete(parseInt(id));

      return response.status(200).json({message:"Account was deleted!!"})
    }catch(error){
      next(error);
    }
  }

  async update(request:Request, response:Response): Promise<any>
  {
    try{
      const {id} = request.params
      const {body} = request

      const {data} = AccountUpdateOneSchema.parse(body)

      await AccountService.update(parseInt(id),data);

      return response.status(200).json({message:"Account was deleted!!"})
    }catch(error){
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
    }
  }
}