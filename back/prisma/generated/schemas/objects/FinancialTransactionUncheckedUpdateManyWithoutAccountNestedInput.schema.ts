import { z } from 'zod';
import { FinancialTransactionCreateWithoutAccountInputObjectSchema } from './FinancialTransactionCreateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutAccountInput.schema';
import { FinancialTransactionCreateOrConnectWithoutAccountInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutAccountInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutAccountInput.schema';
import { FinancialTransactionCreateManyAccountInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyAccountInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutAccountInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutAccountInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutAccountInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FinancialTransactionCreateWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () => FinancialTransactionCreateWithoutAccountInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyAccountInputEnvelopeObjectSchema,
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
              FinancialTransactionUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutAccountInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutAccountInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutAccountInputObjectSchema,
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

export const FinancialTransactionUncheckedUpdateManyWithoutAccountNestedInputObjectSchema =
  Schema;
