import { z } from 'zod';
import { TransactionTypeWhereInputObjectSchema } from './TransactionTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => TransactionTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TransactionTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TransactionTypeRelationFilterObjectSchema = Schema;
