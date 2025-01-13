import { z } from 'zod';
import { TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './TransactionsFormsCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { TransactionsFormsWhereUniqueInputObjectSchema } from './TransactionsFormsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateNestedOneWithoutFinancialTransactionsInput> =
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
      connect: z
        .lazy(() => TransactionsFormsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const TransactionsFormsCreateNestedOneWithoutFinancialTransactionsInputObjectSchema =
  Schema;
