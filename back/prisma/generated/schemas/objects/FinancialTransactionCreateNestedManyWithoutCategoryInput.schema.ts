import { z } from 'zod';
import { FinancialTransactionCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutCategoryInput.schema';
import { FinancialTransactionCreateOrConnectWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutCategoryInput.schema';
import { FinancialTransactionCreateManyCategoryInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyCategoryInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateNestedManyWithoutCategoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FinancialTransactionCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => FinancialTransactionCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyCategoryInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
          z
            .lazy(() => FinancialTransactionWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const FinancialTransactionCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
