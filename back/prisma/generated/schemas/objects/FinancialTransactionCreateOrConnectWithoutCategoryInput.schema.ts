import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
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

export const FinancialTransactionCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
