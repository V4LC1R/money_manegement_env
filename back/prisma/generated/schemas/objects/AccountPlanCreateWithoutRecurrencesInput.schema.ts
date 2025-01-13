import { z } from 'zod';
import { AccountCreateNestedManyWithoutCategoryInputObjectSchema } from './AccountCreateNestedManyWithoutCategoryInput.schema';
import { ParcelCreateNestedManyWithoutCategoryInputObjectSchema } from './ParcelCreateNestedManyWithoutCategoryInput.schema';
import { FinancialTransactionCreateNestedManyWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateWithoutRecurrencesInput> = z
  .object({
    name: z.string(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    parcels: z
      .lazy(() => ParcelCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountPlanCreateWithoutRecurrencesInputObjectSchema = Schema;
