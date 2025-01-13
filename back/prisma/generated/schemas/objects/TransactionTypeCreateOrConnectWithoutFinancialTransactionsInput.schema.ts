import { z } from 'zod';
import { TransactionTypeWhereUniqueInputObjectSchema } from './TransactionTypeWhereUniqueInput.schema';
import { TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeCreateOrConnectWithoutFinancialTransactionsInput> =
  z
    .object({
      where: z.lazy(() => TransactionTypeWhereUniqueInputObjectSchema),
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

export const TransactionTypeCreateOrConnectWithoutFinancialTransactionsInputObjectSchema =
  Schema;
