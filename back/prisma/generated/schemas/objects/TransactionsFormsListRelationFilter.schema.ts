import { z } from 'zod';
import { TransactionsFormsWhereInputObjectSchema } from './TransactionsFormsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsListRelationFilter> = z
  .object({
    every: z.lazy(() => TransactionsFormsWhereInputObjectSchema).optional(),
    some: z.lazy(() => TransactionsFormsWhereInputObjectSchema).optional(),
    none: z.lazy(() => TransactionsFormsWhereInputObjectSchema).optional(),
  })
  .strict();

export const TransactionsFormsListRelationFilterObjectSchema = Schema;
