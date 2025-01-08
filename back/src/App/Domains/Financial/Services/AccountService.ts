import { Account } from "@prisma/client";
import { AccountRepository } from "../Repositories/AccountRepository";

export class AccountService {

    static async getAccounts() : Promise<Account[] | null>
    {
        try {
            return await new AccountRepository()
                .findAll();
        } catch (error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }
}