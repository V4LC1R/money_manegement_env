import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    value: z.literal(true).optional(),
    dueDate: z.literal(true).optional(),
    competence: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const ParcelMinAggregateInputObjectSchema = Schema;
