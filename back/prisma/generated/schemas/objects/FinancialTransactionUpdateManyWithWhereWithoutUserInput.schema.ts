import { z } from 'zod';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';
import { FinancialTransactionUpdateManyMutationInputObjectSchema } from './FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutTransactionsFinancialsInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutTransactionsFinancialsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FinancialTransactionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateManyWithoutTransactionsFinancialsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
