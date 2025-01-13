import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { FinancialTransactionCreateNestedManyWithoutUserInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutHoldersInput> = z
  .object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
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

export const UserCreateWithoutHoldersInputObjectSchema = Schema;
