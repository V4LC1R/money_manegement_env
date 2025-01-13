import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    holderId: z.literal(true).optional(),
  })
  .strict();

export const TransactionsFormsSumAggregateInputObjectSchema = Schema;
