import { z } from 'zod';
import { RecurrenceCreateNestedManyWithoutCategoryInputObjectSchema } from './RecurrenceCreateNestedManyWithoutCategoryInput.schema';
import { AccountCreateNestedManyWithoutCategoryInputObjectSchema } from './AccountCreateNestedManyWithoutCategoryInput.schema';
import { ParcelCreateNestedManyWithoutCategoryInputObjectSchema } from './ParcelCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanCreateWithoutFinancialTransactionsInput> =
  z
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
      parcels: z
        .lazy(() => ParcelCreateNestedManyWithoutCategoryInputObjectSchema)
        .optional(),
    })
    .strict();

export const AccountPlanCreateWithoutFinancialTransactionsInputObjectSchema =
  Schema;
