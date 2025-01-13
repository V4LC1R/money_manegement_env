import { z } from 'zod';
import { TransactionsFormsUncheckedCreateNestedManyWithoutHolderInputObjectSchema } from './TransactionsFormsUncheckedCreateNestedManyWithoutHolderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderUncheckedCreateWithoutOwnerInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    value: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    transactionsForms: z
      .lazy(
        () =>
          TransactionsFormsUncheckedCreateNestedManyWithoutHolderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const HolderUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
