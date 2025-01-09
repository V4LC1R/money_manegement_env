import { Account } from "@prisma/client";
import { AccountRepository } from "../Repositories/AccountRepository";

export class AccountService {

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
            return await new AccountRepository().findById(id)
        }catch(error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }
}