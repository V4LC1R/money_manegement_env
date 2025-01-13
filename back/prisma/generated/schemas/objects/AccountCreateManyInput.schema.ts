import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateManyInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    balance: z.number(),
    userId: z.number(),
    categoryId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const AccountCreateManyInputObjectSchema = Schema;
