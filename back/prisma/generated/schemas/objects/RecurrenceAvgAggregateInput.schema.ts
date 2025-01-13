import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    reptition: z.literal(true).optional(),
    range: z.literal(true).optional(),
    value: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const RecurrenceAvgAggregateInputObjectSchema = Schema;
