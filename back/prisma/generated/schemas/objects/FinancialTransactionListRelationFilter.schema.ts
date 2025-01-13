import { z } from 'zod';
import { FinancialTransactionWhereInputObjectSchema } from './FinancialTransactionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionListRelationFilter> = z
  .object({
    every: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional(),
    some: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional(),
    none: z.lazy(() => FinancialTransactionWhereInputObjectSchema).optional(),
  })
  .strict();

export const FinancialTransactionListRelationFilterObjectSchema = Schema;
