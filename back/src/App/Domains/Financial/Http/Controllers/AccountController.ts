import { NextFunction, Request, Response } from "express";
import { AccountService } from "../../Services/AccountService";
import { AccountRequest } from '../Request/AccountResquest';

export class AccountController {

  async index(request: Request, response: Response, next:NextFunction):Promise<any> {
    try {
        const data = request.params;

        const accounts = await AccountService.getAccounts(data);

        const status = accounts && accounts?.length > 0  ? 200 : 204

        return response.status(status).json(accounts);
    } catch (error) {
      next(error);
    }
  }

  async show(request:Request, response:Response, next:NextFunction): Promise<any> {
    try{
      const {id} = request.params

      const account = await AccountService.getAccount(parseInt(id))

      const status = account ? 200 : 204

      return response.status(status).json(status)
    }catch (error) {
      next(error);
    }
  }

  async store(request:Request, response:Response,next:NextFunction): Promise<any> {
    try{

      const {body} = request
     
      const data = AccountRequest.create(body)

      const account = await AccountService.create(data)

      const status = account ? 201 : 204

      return response.status(status).json(account)
    }catch(error) {
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

  async update(request:Request, response:Response,next:NextFunction): Promise<any>
  {
    try{
      const {id} = request.params

      const data = AccountRequest.update(request.body)

      await AccountService.update(parseInt(id),data);

      return response.status(200).json({message:"Account was deleted!!"})
    }catch(error){
      next(error);
    }
  }
}