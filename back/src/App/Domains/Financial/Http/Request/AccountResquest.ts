import { z } from "zod";

export class AccountRequest
{
    static create(data:object)
    {
        return z.object({
            name: z.string(),
            description: z.string(),
            type: z.string(),
            balance: z.number(),
            userId: z.number(),
        }).parse(data)
    }

    static update(data:object)
    {
        return z.object({
            name: z.string(),
            description: z.string(),
            type: z.string(),
            balance: z.number(),
            userId: z.number(),
        }).parse(data)
    }
}