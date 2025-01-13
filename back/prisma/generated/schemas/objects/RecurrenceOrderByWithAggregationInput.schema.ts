import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RecurrenceCountOrderByAggregateInputObjectSchema } from './RecurrenceCountOrderByAggregateInput.schema';
import { RecurrenceAvgOrderByAggregateInputObjectSchema } from './RecurrenceAvgOrderByAggregateInput.schema';
import { RecurrenceMaxOrderByAggregateInputObjectSchema } from './RecurrenceMaxOrderByAggregateInput.schema';
import { RecurrenceMinOrderByAggregateInputObjectSchema } from './RecurrenceMinOrderByAggregateInput.schema';
import { RecurrenceSumOrderByAggregateInputObjectSchema } from './RecurrenceSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    reptition: z.lazy(() => SortOrderSchema).optional(),
    range: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RecurrenceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RecurrenceAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RecurrenceMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RecurrenceMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RecurrenceSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecurrenceOrderByWithAggregationInputObjectSchema = Schema;
