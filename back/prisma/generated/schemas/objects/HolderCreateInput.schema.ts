import { z } from 'zod';
import { UserCreateNestedOneWithoutHoldersInputObjectSchema } from './UserCreateNestedOneWithoutHoldersInput.schema';
import { TransactionsFormsCreateNestedManyWithoutHolderInputObjectSchema } from './TransactionsFormsCreateNestedManyWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateInput> = z
  .object({
    name: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutHoldersInputObjectSchema),
    transactionsForms: z
      .lazy(
        () => TransactionsFormsCreateNestedManyWithoutHolderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HolderCreateInputObjectSchema = Schema;
