import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    value: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
  })
  .strict();

export const ParcelAvgAggregateInputObjectSchema = Schema;
