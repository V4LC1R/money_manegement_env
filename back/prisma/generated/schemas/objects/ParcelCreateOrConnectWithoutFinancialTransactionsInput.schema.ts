import { z } from 'zod';
import { ParcelWhereUniqueInputObjectSchema } from './ParcelWhereUniqueInput.schema';
import { ParcelCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelCreateWithoutFinancialTransactionsInput.schema';
import { ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema } from './ParcelUncheckedCreateWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateOrConnectWithoutFinancialTransactionsInput> =
  z
    .object({
      where: z.lazy(() => ParcelWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ParcelCreateWithoutFinancialTransactionsInputObjectSchema),
        z.lazy(
          () =>
            ParcelUncheckedCreateWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ParcelCreateOrConnectWithoutFinancialTransactionsInputObjectSchema =
  Schema;
