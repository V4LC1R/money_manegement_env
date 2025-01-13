import { z } from 'zod';
import { FinancialTransactionCreateWithoutParcelInputObjectSchema } from './FinancialTransactionCreateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedCreateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutParcelInput.schema';
import { FinancialTransactionCreateOrConnectWithoutParcelInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutParcelInput.schema';
import { FinancialTransactionCreateManyParcelInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyParcelInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateNestedManyWithoutParcelInput> =
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
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyParcelInputEnvelopeObjectSchema,
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

export const FinancialTransactionCreateNestedManyWithoutParcelInputObjectSchema =
  Schema;
