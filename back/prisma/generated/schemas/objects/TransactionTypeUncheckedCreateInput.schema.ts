import { z } from 'zod';
import { FinancialTransactionUncheckedCreateNestedManyWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutTypeTransactionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionTypeUncheckedCreateInputObjectSchema = Schema;
