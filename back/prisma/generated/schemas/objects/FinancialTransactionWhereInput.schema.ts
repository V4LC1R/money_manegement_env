import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TransactionTypeRelationFilterObjectSchema } from './TransactionTypeRelationFilter.schema';
import { TransactionTypeWhereInputObjectSchema } from './TransactionTypeWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AccountPlanRelationFilterObjectSchema } from './AccountPlanRelationFilter.schema';
import { AccountPlanWhereInputObjectSchema } from './AccountPlanWhereInput.schema';
import { AccountRelationFilterObjectSchema } from './AccountRelationFilter.schema';
import { AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
import { ParcelRelationFilterObjectSchema } from './ParcelRelationFilter.schema';
import { ParcelWhereInputObjectSchema } from './ParcelWhereInput.schema';
import { TransactionsFormsRelationFilterObjectSchema } from './TransactionsFormsRelationFilter.schema';
import { TransactionsFormsWhereInputObjectSchema } from './TransactionsFormsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FinancialTransactionWhereInputObjectSchema),
        z.lazy(() => FinancialTransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FinancialTransactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FinancialTransactionWhereInputObjectSchema),
        z.lazy(() => FinancialTransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    transactionsFormsId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    parcelId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    accountId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    typeId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    typeTransaction: z
      .union([
        z.lazy(() => TransactionTypeRelationFilterObjectSchema),
        z.lazy(() => TransactionTypeWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
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
    parcel: z
      .union([
        z.lazy(() => ParcelRelationFilterObjectSchema),
        z.lazy(() => ParcelWhereInputObjectSchema),
      ])
      .optional(),
    transactionsForm: z
      .union([
        z.lazy(() => TransactionsFormsRelationFilterObjectSchema),
        z.lazy(() => TransactionsFormsWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const FinancialTransactionWhereInputObjectSchema = Schema;
