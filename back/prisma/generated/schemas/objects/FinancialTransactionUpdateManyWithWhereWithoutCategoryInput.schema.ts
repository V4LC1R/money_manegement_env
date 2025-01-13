import { z } from 'zod';
import { FinancialTransactionScalarWhereInputObjectSchema } from './FinancialTransactionScalarWhereInput.schema';
import { FinancialTransactionUpdateManyMutationInputObjectSchema } from './FinancialTransactionUpdateManyMutationInput.schema';
import { FinancialTransactionUncheckedUpdateManyWithoutFinancialTransactionsInputObjectSchema } from './FinancialTransactionUncheckedUpdateManyWithoutFinancialTransactionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => FinancialTransactionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FinancialTransactionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FinancialTransactionUncheckedUpdateManyWithoutFinancialTransactionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FinancialTransactionUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
