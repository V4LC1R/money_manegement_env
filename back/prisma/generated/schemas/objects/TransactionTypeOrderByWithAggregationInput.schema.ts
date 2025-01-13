import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionTypeCountOrderByAggregateInputObjectSchema } from './TransactionTypeCountOrderByAggregateInput.schema';
import { TransactionTypeAvgOrderByAggregateInputObjectSchema } from './TransactionTypeAvgOrderByAggregateInput.schema';
import { TransactionTypeMaxOrderByAggregateInputObjectSchema } from './TransactionTypeMaxOrderByAggregateInput.schema';
import { TransactionTypeMinOrderByAggregateInputObjectSchema } from './TransactionTypeMinOrderByAggregateInput.schema';
import { TransactionTypeSumOrderByAggregateInputObjectSchema } from './TransactionTypeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionTypeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TransactionTypeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TransactionTypeAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TransactionTypeMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TransactionTypeMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TransactionTypeSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionTypeOrderByWithAggregationInputObjectSchema = Schema;
