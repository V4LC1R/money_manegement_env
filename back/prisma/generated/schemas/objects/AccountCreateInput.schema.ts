import { z } from 'zod';
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema';
import { ParcelCreateNestedManyWithoutAccountInputObjectSchema } from './ParcelCreateNestedManyWithoutAccountInput.schema';
import { AccountPlanCreateNestedOneWithoutAccountsInputObjectSchema } from './AccountPlanCreateNestedOneWithoutAccountsInput.schema';
import { FinancialTransactionCreateNestedManyWithoutAccountInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    description: z.string(),
    balance: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
    parcels: z
      .lazy(() => ParcelCreateNestedManyWithoutAccountInputObjectSchema)
      .optional(),
    category: z.lazy(
      () => AccountPlanCreateNestedOneWithoutAccountsInputObjectSchema,
    ),
    financialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutAccountInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AccountCreateInputObjectSchema = Schema;
