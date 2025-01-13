import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutParcelInputObjectSchema } from './FinancialTransactionUpdateWithoutParcelInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutParcelInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FinancialTransactionUpdateWithoutParcelInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutParcelInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutParcelInputObjectSchema =
  Schema;
