import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionsFormsCountOrderByAggregateInputObjectSchema } from './TransactionsFormsCountOrderByAggregateInput.schema';
import { TransactionsFormsAvgOrderByAggregateInputObjectSchema } from './TransactionsFormsAvgOrderByAggregateInput.schema';
import { TransactionsFormsMaxOrderByAggregateInputObjectSchema } from './TransactionsFormsMaxOrderByAggregateInput.schema';
import { TransactionsFormsMinOrderByAggregateInputObjectSchema } from './TransactionsFormsMinOrderByAggregateInput.schema';
import { TransactionsFormsSumOrderByAggregateInputObjectSchema } from './TransactionsFormsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    holderId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TransactionsFormsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TransactionsFormsAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TransactionsFormsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TransactionsFormsMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TransactionsFormsSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionsFormsOrderByWithAggregationInputObjectSchema = Schema;
