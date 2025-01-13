import { z } from 'zod';
import { FinancialTransactionCreateWithoutParcelInputObjectSchema } from './FinancialTransactionCreateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutParcelInput.schema';
import { FinancialTransactionCreateOrConnectWithoutParcelInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutParcelInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutParcelInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutParcelInput.schema';
import { FinancialTransactionCreateManyParcelInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyParcelInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutParcelInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutParcelInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutParcelInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutParcelInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutParcelNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FinancialTransactionCreateWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () => FinancialTransactionCreateWithoutParcelInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutParcelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutParcelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyParcelInputEnvelopeObjectSchema,
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
              FinancialTransactionUpdateWithWhereUniqueWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutParcelInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutParcelInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutParcelInputObjectSchema,
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

export const FinancialTransactionUncheckedUpdateManyWithoutParcelNestedInputObjectSchema =
  Schema;
