import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    reptition: z.literal(true).optional(),
    range: z.literal(true).optional(),
    value: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const RecurrenceCountAggregateInputObjectSchema = Schema;
