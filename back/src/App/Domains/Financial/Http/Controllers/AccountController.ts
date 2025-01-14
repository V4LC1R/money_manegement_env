import {ZodError} from 'zod'
import { Request, Response } from "express";
import { AccountService } from "../../Services/AccountService";
import { AccountCreateOneSchema, AccountUpdateOneSchema } from "prisma/generated/schemas";
import { Account } from '@prisma/client';

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

      const status = account ? 201 : 204

      return response.status(status).json(status)
    }catch(error: ZodError | any) {

      let errorContent:any = { message: "Internal server error" }
      let errorStatus = 500
      
      if(error instanceof ZodError)
        errorContent = {
          message:"Input data Error",
          desciption:error.formErrors
        }

      //retornar erro de validacao
      console.log(error)

      return response.status(errorStatus).json(errorContent);
    }
  }

  async destroy(request:Request, response:Response): Promise<any>
  {
    try{
      const {id} = request.params

      await AccountService.delete(parseInt(id));

      return response.status(200).json({message:"Account was deleted!!"})
    }catch(error){
      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
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