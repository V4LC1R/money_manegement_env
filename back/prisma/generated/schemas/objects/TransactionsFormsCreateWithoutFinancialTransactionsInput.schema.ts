import { z } from 'zod';
import { HolderCreateNestedOneWithoutTransactionsFormsInputObjectSchema } from './HolderCreateNestedOneWithoutTransactionsFormsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsCreateWithoutFinancialTransactionsInput> =
  z
    .object({
      name: z.string(),
      type: z.number(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      holder: z.lazy(
        () => HolderCreateNestedOneWithoutTransactionsFormsInputObjectSchema,
      ),
    })
    .strict();

export const TransactionsFormsCreateWithoutFinancialTransactionsInputObjectSchema =
  Schema;
