import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParcelAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ParcelAvgOrderByAggregateInputObjectSchema = Schema;
