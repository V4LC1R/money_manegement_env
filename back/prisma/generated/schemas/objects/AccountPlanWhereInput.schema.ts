import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RecurrenceListRelationFilterObjectSchema } from './RecurrenceListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { ParcelListRelationFilterObjectSchema } from './ParcelListRelationFilter.schema';
import { FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountPlanWhereInputObjectSchema),
        z.lazy(() => AccountPlanWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountPlanWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountPlanWhereInputObjectSchema),
        z.lazy(() => AccountPlanWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    recurrences: z
      .lazy(() => RecurrenceListRelationFilterObjectSchema)
      .optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    parcels: z.lazy(() => ParcelListRelationFilterObjectSchema).optional(),
    financialTransactions: z
      .lazy(() => FinancialTransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AccountPlanWhereInputObjectSchema = Schema;
