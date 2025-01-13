import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ParcelOrderByRelationAggregateInputObjectSchema } from './ParcelOrderByRelationAggregateInput.schema';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './AccountPlanOrderByWithRelationInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    balance: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    parcels: z
      .lazy(() => ParcelOrderByRelationAggregateInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => AccountPlanOrderByWithRelationInputObjectSchema)
      .optional(),
    financialTransactions: z
      .lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountOrderByWithRelationInputObjectSchema = Schema;
