import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const HolderSumOrderByAggregateInputObjectSchema = Schema;
