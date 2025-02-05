import { Request, Response, NextFunction } from "express";
import { UserService } from '../../Services/UserService';
import { UserRequest } from "../Request/UserRequest";

export class UserController {

  async show(request:Request, response:Response, next:NextFunction): Promise<any> {
    try{
      const {id} = request.params

      const user = await UserService.getUser(parseInt(id))

      const status = user ? 200 : 204

      return response.status(status).json(status)
    }catch(error) {
      next(error);
    }
  }

  async store(request:Request, response:Response, next:NextFunction): Promise<any> {
    try{
      const data = UserRequest.create(request.body)

      const user = await UserService.create(data)

      const status = user ? 201 : 204

      return response.status(status).json(status)
    }catch(error) {
      next(error);
    }
  }
}