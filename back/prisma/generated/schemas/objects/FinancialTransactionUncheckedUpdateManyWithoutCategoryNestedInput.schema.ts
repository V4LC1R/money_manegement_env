import { z } from 'zod';
import { FinancialTransactionCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedCreateWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutCategoryInput.schema';
import { FinancialTransactionCreateOrConnectWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutCategoryInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { FinancialTransactionCreateManyCategoryInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyCategoryInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutCategoryInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutCategoryNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyCategoryInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
          z
            .lazy(() => FinancialTransactionWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
          z
            .lazy(() => FinancialTransactionWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
          z
            .lazy(() => FinancialTransactionWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
          z
            .lazy(() => FinancialTransactionWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema),
          z
            .lazy(() => FinancialTransactionScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const FinancialTransactionUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
