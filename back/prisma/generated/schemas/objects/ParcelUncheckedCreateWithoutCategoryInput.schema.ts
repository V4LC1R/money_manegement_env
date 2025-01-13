import { z } from 'zod';
import { FinancialTransactionUncheckedCreateNestedManyWithoutParcelInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelUncheckedCreateWithoutCategoryInput> = z
  .object({
    id: z.number().optional(),
    value: z.number(),
    dueDate: z.coerce.date(),
    competence: z.coerce.date(),
    accountId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutParcelInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ParcelUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
