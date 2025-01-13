import { z } from 'zod';
import { FinancialTransactionCreateWithoutUserInputObjectSchema } from './FinancialTransactionCreateWithoutUserInput.schema';
import { FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutUserInput.schema';
import { FinancialTransactionCreateOrConnectWithoutUserInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutUserInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutUserInput.schema';
import { FinancialTransactionCreateManyUserInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyUserInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutUserInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutUserInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutUserInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FinancialTransactionCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => FinancialTransactionCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FinancialTransactionCreateManyUserInputEnvelopeObjectSchema)
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
              FinancialTransactionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const FinancialTransactionUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
