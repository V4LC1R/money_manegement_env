import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HolderCountOrderByAggregateInputObjectSchema } from './HolderCountOrderByAggregateInput.schema';
import { HolderAvgOrderByAggregateInputObjectSchema } from './HolderAvgOrderByAggregateInput.schema';
import { HolderMaxOrderByAggregateInputObjectSchema } from './HolderMaxOrderByAggregateInput.schema';
import { HolderMinOrderByAggregateInputObjectSchema } from './HolderMinOrderByAggregateInput.schema';
import { HolderSumOrderByAggregateInputObjectSchema } from './HolderSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => HolderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => HolderAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => HolderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => HolderMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => HolderSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const HolderOrderByWithAggregationInputObjectSchema = Schema;
