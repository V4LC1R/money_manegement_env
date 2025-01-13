import { z } from 'zod';
import { TransactionsFormsCreateNestedManyWithoutHolderInputObjectSchema } from './TransactionsFormsCreateNestedManyWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateWithoutOwnerInput> = z
  .object({
    name: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    transactionsForms: z
      .lazy(
        () => TransactionsFormsCreateNestedManyWithoutHolderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HolderCreateWithoutOwnerInputObjectSchema = Schema;
