import { z } from 'zod';
import { FinancialTransactionCreateNestedManyWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateWithoutHolderInput> = z
  .object({
    name: z.string(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutTransactionsFormInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionsFormsCreateWithoutHolderInputObjectSchema = Schema;
