import { z } from 'zod';
import { HolderUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './HolderUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutTransactionsFinancialsInput> =
  z
    .object({
      id: z.number().optional(),
      email: z.string(),
      name: z.string(),
      password: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      holders: z
        .lazy(
          () => HolderUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
        )
        .optional(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutTransactionsFinancialsInputObjectSchema =
  Schema;
