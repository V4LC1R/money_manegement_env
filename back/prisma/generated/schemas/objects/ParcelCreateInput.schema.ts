import { z } from 'zod';
import { AccountPlanCreateNestedOneWithoutParcelsInputObjectSchema } from './AccountPlanCreateNestedOneWithoutParcelsInput.schema';
import { AccountCreateNestedOneWithoutParcelsInputObjectSchema } from './AccountCreateNestedOneWithoutParcelsInput.schema';
import { FinancialTransactionCreateNestedManyWithoutParcelInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateInput> = z
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
    FinancialTransactions: z
      .lazy(
        () =>
          FinancialTransactionCreateNestedManyWithoutParcelInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ParcelCreateInputObjectSchema = Schema;
