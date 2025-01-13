import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUpdateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            FinancialTransactionUpdateWithoutTypeTransactionInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutTypeTransactionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInputObjectSchema =
  Schema;
