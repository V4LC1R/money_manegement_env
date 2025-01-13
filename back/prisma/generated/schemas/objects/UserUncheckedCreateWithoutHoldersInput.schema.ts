import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { FinancialTransactionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FinancialTransactionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutHoldersInput> = z
  .object({
    id: z.number().optional(),
    email: z.string(),
    name: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    transactionsFinancials: z
      .lazy(
        () =>
          FinancialTransactionUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutHoldersInputObjectSchema = Schema;
