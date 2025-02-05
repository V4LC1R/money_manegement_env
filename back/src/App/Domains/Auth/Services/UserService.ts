import { Prisma, User } from "@prisma/client";
import { UserRepository } from "../Repository/UserRepository";
import { AppError } from "@units/Errors/AppError";

export class UserService {

    static repo:UserRepository = new UserRepository();

    static async create(data: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput): Promise<User>
    {
        try {
            return await UserService
                .repo
                .create(data);
        } catch (error) {
            throw new AppError("Internal server error",500);
        }
    }

    static async getUser(id:number): Promise<User | null>
    {
        try {
            return await UserService
                .repo
                .findById(id);
        } catch (error) {
            throw new AppError("Internal server error",500);
        }
    }
}