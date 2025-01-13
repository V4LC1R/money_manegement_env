import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionTypeOrderByWithRelationInputObjectSchema } from './TransactionTypeOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './AccountPlanOrderByWithRelationInput.schema';
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema';
import { ParcelOrderByWithRelationInputObjectSchema } from './ParcelOrderByWithRelationInput.schema';
import { TransactionsFormsOrderByWithRelationInputObjectSchema } from './TransactionsFormsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    transactionsFormsId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    parcelId: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    typeId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    typeTransaction: z
      .lazy(() => TransactionTypeOrderByWithRelationInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    category: z
      .lazy(() => AccountPlanOrderByWithRelationInputObjectSchema)
      .optional(),
    account: z
      .lazy(() => AccountOrderByWithRelationInputObjectSchema)
      .optional(),
    parcel: z.lazy(() => ParcelOrderByWithRelationInputObjectSchema).optional(),
    transactionsForm: z
      .lazy(() => TransactionsFormsOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const FinancialTransactionOrderByWithRelationInputObjectSchema = Schema;
