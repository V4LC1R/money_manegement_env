import { z } from 'zod';
import { AccountPlanCreateNestedOneWithoutParcelsInputObjectSchema } from './AccountPlanCreateNestedOneWithoutParcelsInput.schema';
import { AccountCreateNestedOneWithoutParcelsInputObjectSchema } from './AccountCreateNestedOneWithoutParcelsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateWithoutFinancialTransactionsInput> =
  z
    .object({
      value: z.number(),
      dueDate: z.coerce.date(),
      competence: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      category: z.lazy(
        () => AccountPlanCreateNestedOneWithoutParcelsInputObjectSchema,
      ),
      account: z.lazy(
        () => AccountCreateNestedOneWithoutParcelsInputObjectSchema,
      ),
    })
    .strict();

export const ParcelCreateWithoutFinancialTransactionsInputObjectSchema = Schema;
