import { z } from 'zod';
import { ParcelUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateNestedManyWithoutAccountInput.schema';
import { FinancialTransactionUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    description: z.string(),
    balance: z.number(),
    categoryId: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    parcels: z
      .lazy(
        () => ParcelUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountUncheckedCreateWithoutUserInputObjectSchema = Schema;
