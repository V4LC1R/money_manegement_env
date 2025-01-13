import { z } from 'zod';
import { HolderCreateNestedOneWithoutTransactionsFormsInputObjectSchema } from './HolderCreateNestedOneWithoutTransactionsFormsInput.schema';
import { FinancialTransactionCreateNestedManyWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateInput> = z
  .object({
    name: z.string(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    holder: z.lazy(
      () => HolderCreateNestedOneWithoutTransactionsFormsInputObjectSchema,
    ),
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutTransactionsFormInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionsFormsCreateInputObjectSchema = Schema;
