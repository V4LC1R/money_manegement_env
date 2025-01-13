import { z } from 'zod';
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from './UserCreateNestedOneWithoutAccountsInput.schema';
import { AccountPlanCreateNestedOneWithoutAccountsInputObjectSchema } from './AccountPlanCreateNestedOneWithoutAccountsInput.schema';
import { FinancialTransactionCreateNestedManyWithoutAccountInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountCreateWithoutParcelsInput> = z
  .object({
    description: z.string(),
    balance: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
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

export const AccountCreateWithoutParcelsInputObjectSchema = Schema;
