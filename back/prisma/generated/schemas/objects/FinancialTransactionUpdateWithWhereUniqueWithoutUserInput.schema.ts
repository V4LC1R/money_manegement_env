import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutUserInputObjectSchema } from './FinancialTransactionUpdateWithoutUserInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => FinancialTransactionUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
