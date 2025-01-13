import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HolderRelationFilterObjectSchema } from './HolderRelationFilter.schema';
import { HolderWhereInputObjectSchema } from './HolderWhereInput.schema';
import { FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionsFormsWhereInputObjectSchema),
        z.lazy(() => TransactionsFormsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionsFormsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionsFormsWhereInputObjectSchema),
        z.lazy(() => TransactionsFormsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    holderId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    holder: z
      .union([
        z.lazy(() => HolderRelationFilterObjectSchema),
        z.lazy(() => HolderWhereInputObjectSchema),
      ])
      .optional(),
    FinancialTransactions: z
      .lazy(() => FinancialTransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionsFormsWhereInputObjectSchema = Schema;
