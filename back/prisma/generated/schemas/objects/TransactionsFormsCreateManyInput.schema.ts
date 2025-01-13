import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    type: z.number(),
    holderId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const TransactionsFormsCreateManyInputObjectSchema = Schema;
