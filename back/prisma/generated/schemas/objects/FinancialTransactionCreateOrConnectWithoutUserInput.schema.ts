import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionCreateWithoutUserInputObjectSchema } from './FinancialTransactionCreateWithoutUserInput.schema';
import { FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FinancialTransactionCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => FinancialTransactionUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
