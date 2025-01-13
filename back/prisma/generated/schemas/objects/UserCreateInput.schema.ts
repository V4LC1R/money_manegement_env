import { z } from 'zod';
import { HolderCreateNestedManyWithoutOwnerInputObjectSchema } from './HolderCreateNestedManyWithoutOwnerInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    holders: z
      .lazy(() => HolderCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    transactionsFinancials: z
      .lazy(
        () => FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
