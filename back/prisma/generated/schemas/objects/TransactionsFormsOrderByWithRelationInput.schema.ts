import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HolderOrderByWithRelationInputObjectSchema } from './HolderOrderByWithRelationInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    holderId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    holder: z.lazy(() => HolderOrderByWithRelationInputObjectSchema).optional(),
    FinancialTransactions: z
      .lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionsFormsOrderByWithRelationInputObjectSchema = Schema;
