import { z } from 'zod';
import { RecurrenceCreateNestedManyWithoutCategoryInputObjectSchema } from './RecurrenceCreateNestedManyWithoutCategoryInput.schema';
import { AccountCreateNestedManyWithoutCategoryInputObjectSchema } from './AccountCreateNestedManyWithoutCategoryInput.schema';
import { FinancialTransactionCreateNestedManyWithoutCategoryInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateWithoutParcelsInput> = z
  .object({
    name: z.string(),
    type: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    recurrences: z
      .lazy(() => RecurrenceCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountPlanCreateWithoutParcelsInputObjectSchema = Schema;
