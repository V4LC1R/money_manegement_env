import { Prisma, User } from "@prisma/client";
import { UserRepository } from "../Repository/UserRepository";

export class UserService {

    static repo:UserRepository = new UserRepository();

    static async create(data: Prisma.UserCreateInput | Prisma.UserUncheckedCreateInput): Promise<User>
    {
        try {
            return await UserService
                .repo
                .create(data);
        } catch (error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }

    static async getUser(id:number): Promise<User | null>
    {
        try {
            return await UserService
                .repo
                .findById(id);
        } catch (error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }
}