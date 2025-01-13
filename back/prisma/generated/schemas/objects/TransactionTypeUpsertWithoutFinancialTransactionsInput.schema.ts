import { z } from 'zod';
import { TransactionTypeUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeUpsertWithoutFinancialTransactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            TransactionTypeUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionTypeUpsertWithoutFinancialTransactionsInputObjectSchema =
  Schema;
