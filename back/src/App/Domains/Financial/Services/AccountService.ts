
import { Account, Prisma } from "@prisma/client";
import { AccountRepository } from "../Repositories/AccountRepository";
import { AppError } from "@units/Errors/AppError";

export class AccountService {

    static repo: AccountRepository = new AccountRepository();

    static async getAccounts(data:object) : Promise<Account[] | null>
    {
        try {
            return await AccountRepository
                .getAccounts(data);
        } catch (error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }

    static async getAccount(id:number)
    {
        try{
            return await AccountService
                .repo
                .findById(id)
        }catch(error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }

    static async create(data:Partial<Account>): Promise<Account>
    {
        try{
            return await AccountService
                .repo
                .create(data)
        }catch (error){
            console.log(error);
            throw new AppError("Internal server error");
        }
    }

    static async delete(id:number) : Promise<boolean>
    {
        try{
            return await AccountService
                .repo
                .delete(id)
        } catch (error){
            console.log(error);
            throw new AppError("Internal server error");
        }
    }

    static async update(id:number,data:Prisma.AccountUpdateInput | Prisma.AccountUncheckedUpdateInput): Promise<Account | null>
    {
        try{
            return await AccountService
                .repo
                .update(id,data)
        } catch (error){
            console.log(error);
            throw new AppError("Internal server error");
        }
    }
}