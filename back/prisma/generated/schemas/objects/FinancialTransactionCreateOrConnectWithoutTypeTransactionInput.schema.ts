import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionCreateWithoutTypeTransactionInput.schema';
import { FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutTypeTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutTypeTransactionInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            FinancialTransactionCreateWithoutTypeTransactionInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedCreateWithoutTypeTransactionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionCreateOrConnectWithoutTypeTransactionInputObjectSchema =
  Schema;
