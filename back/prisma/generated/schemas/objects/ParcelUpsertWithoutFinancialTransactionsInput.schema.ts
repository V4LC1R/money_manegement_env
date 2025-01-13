import { z } from 'zod';
import { ParcelUpdateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUpdateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedUpdateWithoutFinancialTransactionsInput.schema';
import { ParcelCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUpsertWithoutFinancialTransactionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ParcelUpdateWithoutFinancialTransactionsInputObjectSchema),
        z.lazy(
          () =>
            ParcelUncheckedUpdateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ParcelCreateWithoutFinancialTransactionsInputObjectSchema),
        z.lazy(
          () =>
            ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParcelUpsertWithoutFinancialTransactionsInputObjectSchema = Schema;
