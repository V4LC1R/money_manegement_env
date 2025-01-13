import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ParcelCountOrderByAggregateInputObjectSchema } from './ParcelCountOrderByAggregateInput.schema';
import { ParcelAvgOrderByAggregateInputObjectSchema } from './ParcelAvgOrderByAggregateInput.schema';
import { ParcelMaxOrderByAggregateInputObjectSchema } from './ParcelMaxOrderByAggregateInput.schema';
import { ParcelMinOrderByAggregateInputObjectSchema } from './ParcelMinOrderByAggregateInput.schema';
import { ParcelSumOrderByAggregateInputObjectSchema } from './ParcelSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    dueDate: z.lazy(() => SortOrderSchema).optional(),
    competence: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ParcelCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ParcelAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ParcelMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ParcelMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ParcelSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ParcelOrderByWithAggregationInputObjectSchema = Schema;
