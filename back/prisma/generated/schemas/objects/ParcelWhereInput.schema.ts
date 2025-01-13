import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AccountPlanRelationFilterObjectSchema } from './AccountPlanRelationFilter.schema';
import { AccountPlanWhereInputObjectSchema } from './AccountPlanWhereInput.schema';
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ParcelWhereInputObjectSchema),
        z.lazy(() => ParcelWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ParcelWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ParcelWhereInputObjectSchema),
        z.lazy(() => ParcelWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    dueDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    competence: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    category: z
      .union([
        z.lazy(() => AccountPlanRelationFilterObjectSchema),
        z.lazy(() => AccountPlanWhereInputObjectSchema),
      ])
      .optional(),
    account: z
      .union([
        z.lazy(() => AccountRelationFilterObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema),
      ])
      .optional(),
    FinancialTransactions: z
      .lazy(() => FinancialTransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ParcelWhereInputObjectSchema = Schema;
