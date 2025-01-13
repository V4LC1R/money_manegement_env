import { z } from 'zod';
import { UserCreateNestedOneWithoutHoldersInputObjectSchema } from './UserCreateNestedOneWithoutHoldersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderCreateWithoutTransactionsFormsInput> = z
  .object({
    name: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutHoldersInputObjectSchema),
  })
  .strict();

export const HolderCreateWithoutTransactionsFormsInputObjectSchema = Schema;
