import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ParcelListRelationFilterObjectSchema } from './ParcelListRelationFilter.schema';
import { AccountPlanRelationFilterObjectSchema } from './AccountPlanRelationFilter.schema';
import { AccountPlanWhereInputObjectSchema } from './AccountPlanWhereInput.schema';
import { FinancialTransactionListRelationFilterObjectSchema } from './FinancialTransactionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputObjectSchema),
        z.lazy(() => AccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    balance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    userId: z
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
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    parcels: z.lazy(() => ParcelListRelationFilterObjectSchema).optional(),
    category: z
      .union([
        z.lazy(() => AccountPlanRelationFilterObjectSchema),
        z.lazy(() => AccountPlanWhereInputObjectSchema),
      ])
      .optional(),
    financialTransactions: z
      .lazy(() => FinancialTransactionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AccountWhereInputObjectSchema = Schema;
