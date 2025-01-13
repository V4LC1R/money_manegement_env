import { z } from 'zod';
import { FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionCreateOrConnectWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutTypeTransactionInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInput.schema';
import { FinancialTransactionCreateManyTypeTransactionInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyTypeTransactionInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutTypeTransactionInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutTypeTransactionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutTypeTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutTypeTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            FinancialTransactionCreateManyTypeTransactionInputEnvelopeObjectSchema,
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
              FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutTypeTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutTypeTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutTypeTransactionInputObjectSchema,
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

export const FinancialTransactionUncheckedUpdateManyWithoutTypeTransactionNestedInputObjectSchema =
  Schema;
