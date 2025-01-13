import { z } from 'zod';
import { TransactionsFormsUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUpsertWithoutFinancialTransactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            TransactionsFormsUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
        z.lazy(
          () =>
            TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TransactionsFormsUpsertWithoutFinancialTransactionsInputObjectSchema =
  Schema;
