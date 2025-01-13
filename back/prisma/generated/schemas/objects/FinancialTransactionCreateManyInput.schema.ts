import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateManyInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    value: z.number(),
    userId: z.number(),
    transactionsFormsId: z.number(),
    categoryId: z.number(),
    parcelId: z.number(),
    accountId: z.number(),
    typeId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const FinancialTransactionCreateManyInputObjectSchema = Schema;
