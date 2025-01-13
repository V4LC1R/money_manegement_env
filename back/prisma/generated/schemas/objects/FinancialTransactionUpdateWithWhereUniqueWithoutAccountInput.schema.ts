import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutAccountInputObjectSchema } from './FinancialTransactionUpdateWithoutAccountInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutAccountInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutAccountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutAccountInputObjectSchema =
  Schema;
