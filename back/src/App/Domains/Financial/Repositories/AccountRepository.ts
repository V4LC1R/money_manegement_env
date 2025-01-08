
import { Account } from '@prisma/client';
import prisma from '@supports/Prisma';
import { PrismaRepository } from '@units/PrismaRepository';

export class AccountRepository extends PrismaRepository<Account>{
    constructor(){
        super(prisma.account);
    }
}