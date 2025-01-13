import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
  })
  .strict();

export const AccountPlanAvgAggregateInputObjectSchema = Schema;
