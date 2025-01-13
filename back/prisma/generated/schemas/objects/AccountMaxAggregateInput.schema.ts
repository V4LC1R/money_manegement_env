import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    balance: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const AccountMaxAggregateInputObjectSchema = Schema;
