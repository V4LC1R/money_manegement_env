import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    value: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
  })
  .strict();

export const HolderSumAggregateInputObjectSchema = Schema;
