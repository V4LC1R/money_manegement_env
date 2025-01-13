import { z } from 'zod';
import { FinancialTransactionCreateWithoutAccountInputObjectSchema } from './FinancialTransactionCreateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedCreateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutAccountInput.schema';
import { FinancialTransactionCreateOrConnectWithoutAccountInputObjectSchema } from './FinancialTransactionCreateOrConnectWithoutAccountInput.schema';
import { FinancialTransactionCreateManyAccountInputEnvelopeObjectSchema } from './FinancialTransactionCreateManyAccountInputEnvelope.schema';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUncheckedCreateNestedManyWithoutAccountInput> =
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
      createMany: z
        .lazy(
          () => FinancialTransactionCreateManyAccountInputEnvelopeObjectSchema,
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

export const FinancialTransactionUncheckedCreateNestedManyWithoutAccountInputObjectSchema =
  Schema;
