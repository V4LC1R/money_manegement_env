import { Account } from '@prisma/client';
import { PrismaRepository } from "../../../Units/PrismaRepository";
import prisma from '../../../Suports/Prisma';

export class AccountRepository extends PrismaRepository<Account>{
    constructor(){
        super(prisma.account);
    }
}