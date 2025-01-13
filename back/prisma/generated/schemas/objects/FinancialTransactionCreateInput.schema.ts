import { z } from 'zod';
import { TransactionTypeCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateNestedOneWithoutFinancialTransactionsInput.schema';
import { UserCreateNestedOneWithoutTransactionsFinancialsInputObjectSchema } from './UserCreateNestedOneWithoutTransactionsFinancialsInput.schema';
import { AccountPlanCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './AccountPlanCreateNestedOneWithoutFinancialTransactionsInput.schema';
import { AccountCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './AccountCreateNestedOneWithoutFinancialTransactionsInput.schema';
import { ParcelCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateNestedOneWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsCreateNestedOneWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateNestedOneWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateInput> = z
  .object({
    description: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    typeTransaction: z.lazy(
      () =>
        TransactionTypeCreateNestedOneWithoutFinancialTransactionsInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutTransactionsFinancialsInputObjectSchema,
    ),
    category: z.lazy(
      () =>
        AccountPlanCreateNestedOneWithoutFinancialTransactionsInputObjectSchema,
    ),
    account: z.lazy(
      () => AccountCreateNestedOneWithoutFinancialTransactionsInputObjectSchema,
    ),
    parcel: z.lazy(
      () => ParcelCreateNestedOneWithoutFinancialTransactionsInputObjectSchema,
    ),
    transactionsForm: z.lazy(
      () =>
        TransactionsFormsCreateNestedOneWithoutFinancialTransactionsInputObjectSchema,
    ),
  })
  .strict();

export const FinancialTransactionCreateInputObjectSchema = Schema;
