import { z } from 'zod';
import { HolderCreateNestedManyWithoutOwnerInputObjectSchema } from './HolderCreateNestedManyWithoutOwnerInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutTransactionsFinancialsInput> = z
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
  })
  .strict();

export const UserCreateWithoutTransactionsFinancialsInputObjectSchema = Schema;
