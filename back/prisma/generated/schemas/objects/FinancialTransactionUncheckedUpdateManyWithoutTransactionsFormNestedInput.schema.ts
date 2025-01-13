import { z } from 'zod';
import { FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionCreateOrConnectWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutTransactionsFormInput.schema';
import { FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInput.schema';
import { FinancialTransactionCreateManyTransactionsFormInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyTransactionsFormInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInput.schema';
import { FinancialTransactionUpdateManyWithWhereWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUpdateManyWithWhereWithoutTransactionsFormInput.schema';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedUpdateManyWithoutTransactionsFormNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionCreateOrConnectWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionCreateOrConnectWithoutTransactionsFormInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpsertWithWhereUniqueWithoutTransactionsFormInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            FinancialTransactionCreateManyTransactionsFormInputEnvelopeObjectSchema,
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
              FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FinancialTransactionUpdateManyWithWhereWithoutTransactionsFormInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FinancialTransactionUpdateManyWithWhereWithoutTransactionsFormInputObjectSchema,
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

export const FinancialTransactionUncheckedUpdateManyWithoutTransactionsFormNestedInputObjectSchema =
  Schema;
