import { z } from 'zod';
import { FinancialTransactionUncheckedCreateNestedManyWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    type: z.number(),
    holderId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutTransactionsFormInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionsFormsUncheckedCreateInputObjectSchema = Schema;
