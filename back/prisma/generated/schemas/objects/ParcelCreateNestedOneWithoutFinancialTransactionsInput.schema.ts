import { z } from 'zod';
import { ParcelCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { ParcelCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateNestedOneWithoutFinancialTransactionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ParcelCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ParcelCreateOrConnectWithoutFinancialTransactionsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ParcelWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ParcelCreateNestedOneWithoutFinancialTransactionsInputObjectSchema =
  Schema;
