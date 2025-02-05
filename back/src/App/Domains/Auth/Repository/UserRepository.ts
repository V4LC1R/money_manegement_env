import { User } from '@prisma/client';
import prisma from '@supports/Prisma';
import { PrismaRepository } from '@units/PrismaRepository';

export class UserRepository extends PrismaRepository<User>{
    constructor(){
        super(prisma.account);
    }
}