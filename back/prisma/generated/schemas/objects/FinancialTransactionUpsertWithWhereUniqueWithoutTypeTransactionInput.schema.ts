import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUpdateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutTypeTransactionInput.schema';
import { FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            FinancialTransactionUpdateWithoutTypeTransactionInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutTypeTransactionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInputObjectSchema =
  Schema;
