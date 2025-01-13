import { z } from 'zod';
import { FinancialTransactionCreateWithoutUserInputObjectSchema } from './FinancialTransactionCreateWithoutUserInput.schema';
import { FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutUserInput.schema';
import { FinancialTransactionCreateOrConnectWithoutUserInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutUserInput.schema';
import { FinancialTransactionCreateManyUserInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyUserInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => FinancialTransactionCreateManyUserInputEnvelopeObjectSchema)
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

export const FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
