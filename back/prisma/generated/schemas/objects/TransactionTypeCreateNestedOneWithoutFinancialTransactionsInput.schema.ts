import { z } from 'zod';
import { TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { TransactionTypeWhereUniqueInputObjectSchema } from './TransactionTypeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeCreateNestedOneWithoutFinancialTransactionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            TransactionTypeCreateOrConnectWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => TransactionTypeWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionTypeCreateNestedOneWithoutFinancialTransactionsInputObjectSchema =
  Schema;
