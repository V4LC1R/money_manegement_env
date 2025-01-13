import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutCategoryInputObjectSchema } from './FinancialTransactionUpdateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => FinancialTransactionUpdateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
