import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './AccountPlanOrderByWithRelationInput.schema';
import { AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z.lazy(() => SortOrderSchema).optional(),
    competence: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .lazy(() => AccountPlanOrderByWithRelationInputObjectSchema)
      .optional(),
    account: z
      .lazy(() => AccountOrderByWithRelationInputObjectSchema)
      .optional(),
    FinancialTransactions: z
      .lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParcelOrderByWithRelationInputObjectSchema = Schema;
