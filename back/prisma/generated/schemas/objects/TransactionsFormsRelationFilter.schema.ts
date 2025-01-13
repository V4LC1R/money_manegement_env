import { z } from 'zod';
import { TransactionsFormsWhereInputObjectSchema } from './TransactionsFormsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsRelationFilter> = z
  .object({
    is: z
      .lazy(() => TransactionsFormsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TransactionsFormsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TransactionsFormsRelationFilterObjectSchema = Schema;
