import { z } from 'zod';
import { FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionCreateOrConnectWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutTypeTransactionInput.schema';
import { FinancialTransactionCreateManyTypeTransactionInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyTypeTransactionInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateNestedManyWithoutTypeTransactionInput> =
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
      createMany: z
        .lazy(
          () =>
            FinancialTransactionCreateManyTypeTransactionInputEnvelopeObjectSchema,
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

export const FinancialTransactionCreateNestedManyWithoutTypeTransactionInputObjectSchema =
  Schema;
