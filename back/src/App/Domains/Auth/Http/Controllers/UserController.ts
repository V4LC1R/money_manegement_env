import {ZodError} from 'zod'
import { Request, Response } from "express";
import { UserCreateOneSchema } from "prisma/generated/schemas";
import { UserService } from '../../Services/UserService';

export class AccountController {

  async show(request:Request, response:Response): Promise<any> {
    try{
      const {id} = request.params

      const user = await UserService.getUser(parseInt(id))

      const status = user ? 200 : 204

      return response.status(status).json(status)
    }catch(error) {
      console.log(error);
      throw error
    }
  }

  async store(request:Request, response:Response): Promise<any> {
    try{
      const {body} = request

      const {data} = UserCreateOneSchema.parse(body)

      const passwordEncript = data.password

      const user = await UserService.create({...data,password:passwordEncript})

      const status = user ? 201 : 204

      return response.status(status).json(status)
    }catch(error: ZodError | any) {

      let errorContent:any = { message: "Internal server error" }
      let errorStatus = 500
      
      if(error instanceof ZodError)
        errorContent = {
          message:"Input data Error",
          desciption:error.formErrors
        }

      return response.status(errorStatus).json(errorContent);
    }
  }
}