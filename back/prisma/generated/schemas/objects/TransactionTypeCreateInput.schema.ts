import { z } from 'zod';
import { FinancialTransactionCreateNestedManyWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeCreateInput> = z
  .object({
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutTypeTransactionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionTypeCreateInputObjectSchema = Schema;
