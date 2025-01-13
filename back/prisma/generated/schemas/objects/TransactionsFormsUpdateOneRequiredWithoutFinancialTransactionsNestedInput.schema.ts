import { z } from 'zod';
import { TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUpsertWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUpsertWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';
import { TransactionsFormsUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUpdateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsUpdateOneRequiredWithoutFinancialTransactionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            TransactionsFormsUpsertWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => TransactionsFormsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TransactionsFormsUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              TransactionsFormsUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TransactionsFormsUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema =
  Schema;
