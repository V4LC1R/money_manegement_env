import { z } from 'zod';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInput> =
  z
    .object({
      where: z.lazy(() => TransactionsFormsWhereUniqueInputObjectSchema),
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

export const TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInputObjectSchema =
  Schema;
