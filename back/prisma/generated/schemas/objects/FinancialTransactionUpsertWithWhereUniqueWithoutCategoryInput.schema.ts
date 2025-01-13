import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutCategoryInputObjectSchema } from './FinancialTransactionUpdateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutCategoryInput.schema';
import { FinancialTransactionCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => FinancialTransactionUpdateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => FinancialTransactionCreateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
