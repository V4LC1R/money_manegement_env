import { z } from 'zod';
import { FinancialTransactionUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutParcelsInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    balance: z.number(),
    userId: z.number(),
    categoryId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateWithoutParcelsInputObjectSchema = Schema;
