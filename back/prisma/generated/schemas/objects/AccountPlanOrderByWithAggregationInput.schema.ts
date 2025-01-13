import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountPlanCountOrderByAggregateInputObjectSchema } from './AccountPlanCountOrderByAggregateInput.schema';
import { AccountPlanAvgOrderByAggregateInputObjectSchema } from './AccountPlanAvgOrderByAggregateInput.schema';
import { AccountPlanMaxOrderByAggregateInputObjectSchema } from './AccountPlanMaxOrderByAggregateInput.schema';
import { AccountPlanMinOrderByAggregateInputObjectSchema } from './AccountPlanMinOrderByAggregateInput.schema';
import { AccountPlanSumOrderByAggregateInputObjectSchema } from './AccountPlanSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountPlanOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AccountPlanCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => AccountPlanAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AccountPlanMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AccountPlanMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => AccountPlanSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AccountPlanOrderByWithAggregationInputObjectSchema = Schema;
