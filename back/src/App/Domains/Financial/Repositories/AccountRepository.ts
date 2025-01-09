
import { Account, Prisma } from '@prisma/client';
import prisma from '@supports/Prisma';
import { PrismaRepository } from '@units/PrismaRepository';

interface SearchAccoutPayload extends Partial<Omit<Account, 'id' | 'createdAt' | 'updatedAt'>>{
    startDate?: string;
    endDate?: string;
};

export class AccountRepository extends PrismaRepository<Account>{
    constructor(){
        super(prisma.account);
    }

    static async getAccounts(data: SearchAccoutPayload): Promise<Account[] | null> {
        try {
            const search: Prisma.AccountWhereInput = {};

            if (data.balance) search.balance = data.balance;
            if (data.userId) search.userId = data.userId;
            if (data.categoryId) search.categoryId = data.categoryId;

            //busca proximada
            if (data.description)
                search.description = {contains:data.description}

            //busca por range de data
            if (data?.startDate && data?.endDate) {
                search.AND = [
                    {
                        createdAt: {
                            gte: new Date(data.startDate)
                        }
                    },
                    {
                        createdAt: {
                            lte: new Date(data.endDate)
                        }
                    }
                ]
            }

            return await prisma.account.findMany({
                where: search, // Ajuste para garantir que o Prisma receba o tipo correto
            });
        } catch (error) {
            console.log(error);
            throw new Error("Internal server error");
        }
    }
}