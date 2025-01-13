import { z } from 'zod';
import { AccountCreateNestedOneWithoutParcelsInputObjectSchema } from './AccountCreateNestedOneWithoutParcelsInput.schema';
import { FinancialTransactionCreateNestedManyWithoutParcelInputObjectSchema } from './FinancialTransactionCreateNestedManyWithoutParcelInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelCreateWithoutCategoryInput> = z
  .object({
    value: z.number(),
    dueDate: z.coerce.date(),
    competence: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
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

export const ParcelCreateWithoutCategoryInputObjectSchema = Schema;
