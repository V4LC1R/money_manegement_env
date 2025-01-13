import { z } from 'zod';
import { TransactionTypeCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUpsertWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUpsertWithoutFinancialTransactionsInput.schema';
import { TransactionTypeWhereUniqueInputObjectSchema } from './TransactionTypeWhereUniqueInput.schema';
import { TransactionTypeUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeUpdateOneRequiredWithoutFinancialTransactionsNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            TransactionTypeUpsertWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => TransactionTypeWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TransactionTypeUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              TransactionTypeUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TransactionTypeUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema =
  Schema;
