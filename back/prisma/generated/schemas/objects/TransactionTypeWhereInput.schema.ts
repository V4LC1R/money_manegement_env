import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionTypeWhereInputObjectSchema),
        z.lazy(() => TransactionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionTypeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionTypeWhereInputObjectSchema),
        z.lazy(() => TransactionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    financialTransactions: z
      .lazy(() => FinancialTransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionTypeWhereInputObjectSchema = Schema;
