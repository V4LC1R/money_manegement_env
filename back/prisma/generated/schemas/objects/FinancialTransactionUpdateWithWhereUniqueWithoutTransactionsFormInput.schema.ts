import { z } from 'zod';
import { FinancialTransactionWhereUniqueInputObjectSchema } from './FinancialTransactionWhereUniqueInput.schema';
import { FinancialTransactionUpdateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUpdateWithoutTransactionsFormInput.schema';
import { FinancialTransactionUncheckedUpdateWithoutTransactionsFormInputObjectSchema } from './FinancialTransactionUncheckedUpdateWithoutTransactionsFormInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            FinancialTransactionUpdateWithoutTransactionsFormInputObjectSchema,
        ),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateWithoutTransactionsFormInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateWithWhereUniqueWithoutTransactionsFormInputObjectSchema =
  Schema;
