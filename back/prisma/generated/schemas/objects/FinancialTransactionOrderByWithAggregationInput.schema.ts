import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FinancialTransactionCountOrderByAggregateInputObjectSchema } from './FinancialTransactionCountOrderByAggregateInput.schema';
import { FinancialTransactionAvgOrderByAggregateInputObjectSchema } from './FinancialTransactionAvgOrderByAggregateInput.schema';
import { FinancialTransactionMaxOrderByAggregateInputObjectSchema } from './FinancialTransactionMaxOrderByAggregateInput.schema';
import { FinancialTransactionMinOrderByAggregateInputObjectSchema } from './FinancialTransactionMinOrderByAggregateInput.schema';
import { FinancialTransactionSumOrderByAggregateInputObjectSchema } from './FinancialTransactionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionOrderByWithAggregationInput> =
  z
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
      _count: z
        .lazy(() => FinancialTransactionCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => FinancialTransactionAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => FinancialTransactionMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => FinancialTransactionMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => FinancialTransactionSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const FinancialTransactionOrderByWithAggregationInputObjectSchema =
  Schema;
