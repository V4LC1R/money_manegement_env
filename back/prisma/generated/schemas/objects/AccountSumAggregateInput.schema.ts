import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    balance: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
  })
  .strict();

export const AccountSumAggregateInputObjectSchema = Schema;
