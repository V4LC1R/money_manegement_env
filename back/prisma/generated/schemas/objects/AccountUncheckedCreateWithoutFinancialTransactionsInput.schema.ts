import { z } from 'zod';
import { ParcelUncheckedCreateNestedManyWithoutAccountInputObjectSchema } from './ParcelUncheckedCreateNestedManyWithoutAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateWithoutFinancialTransactionsInput> =
  z
    .object({
      id: z.number().optional(),
      description: z.string(),
      balance: z.number(),
      userId: z.number(),
      categoryId: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      parcels: z
        .lazy(
          () => ParcelUncheckedCreateNestedManyWithoutAccountInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AccountUncheckedCreateWithoutFinancialTransactionsInputObjectSchema =
  Schema;
