import { z } from 'zod';
import { HolderCreateNestedManyWithoutOwnerInputObjectSchema } from './HolderCreateNestedManyWithoutOwnerInput.schema';
import { FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    holders: z
      .lazy(() => HolderCreateNestedManyWithoutOwnerInputObjectSchema)
      .optional(),
    transactionsFinancials: z
      .lazy(
        () => FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
