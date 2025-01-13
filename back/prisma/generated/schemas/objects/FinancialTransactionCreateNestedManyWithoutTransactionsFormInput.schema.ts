import { z } from 'zod';
import { FinancialTransactionCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTransactionsFormInput.schema';
import { FinancialTransactionCreateOrConnectWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutTransactionsFormInput.schema';
import { FinancialTransactionCreateManyTransactionsFormInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyTransactionsFormInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateNestedManyWithoutTransactionsFormInput> =
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
      createMany: z
        .lazy(
          () =>
            FinancialTransactionCreateManyTransactionsFormInputEnvelopeObjectSchema,
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

export const FinancialTransactionCreateNestedManyWithoutTransactionsFormInputObjectSchema =
  Schema;
