import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    description: z.literal(true).optional(),
    value: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    transactionsFormsId: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    parcelId: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    typeId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const FinancialTransactionMinAggregateInputObjectSchema = Schema;
