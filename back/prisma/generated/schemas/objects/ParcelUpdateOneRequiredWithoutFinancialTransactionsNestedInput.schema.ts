import { z } from 'zod';
import { ParcelCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedCreateWithoutFinancialTransactionsInput.schema';
import { ParcelCreateOrConnectWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateOrConnectWithoutFinancialTransactionsInput.schema';
import { ParcelUpsertWithoutFinancialTransactionsInputObjectSchema } from './ParcelUpsertWithoutFinancialTransactionsInput.schema';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelUpdateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUpdateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedUpdateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpdateOneRequiredWithoutFinancialTransactionsNestedInput> =
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
      upsert: z
        .lazy(() => ParcelUpsertWithoutFinancialTransactionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ParcelWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ParcelUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ParcelUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ParcelUpdateOneRequiredWithoutFinancialTransactionsNestedInputObjectSchema =
  Schema;
