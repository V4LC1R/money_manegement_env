import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { ParcelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ParcelUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { FinancialTransactionUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanUncheckedCreateWithoutRecurrencesInput> =
  z
    .object({
      id: z.number().optional(),
      name: z.string(),
      type: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      accounts: z
        .lazy(
          () =>
            AccountUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
      parcels: z
        .lazy(
          () => ParcelUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
      financialTransactions: z
        .lazy(
          () =>
            FinancialTransactionUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AccountPlanUncheckedCreateWithoutRecurrencesInputObjectSchema =
  Schema;
