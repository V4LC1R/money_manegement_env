import { z } from 'zod';
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema';
import { ParcelCreateNestedManyWithoutAccountInputObjectSchema } from './ParcelCreateNestedManyWithoutAccountInput.schema';
import { FinancialTransactionCreateNestedManyWithoutAccountInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateWithoutCategoryInput> = z
  .object({
    description: z.string(),
    balance: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
    parcels: z
      .lazy(() => ParcelCreateNestedManyWithoutAccountInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountCreateWithoutCategoryInputObjectSchema = Schema;
