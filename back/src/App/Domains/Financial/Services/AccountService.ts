
import { Account, Prisma } from "@prisma/client";
import { AccountRepository } from "../Repositories/AccountRepository";

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

    static async create(data: Prisma.AccountCreateInput | Prisma.AccountUncheckedCreateInput)
    {
        try{
            return await AccountService
                .repo
                .create(data)
        }catch (error){
            console.log(error);
            throw new Error("Internal server error");
        }
    }
}