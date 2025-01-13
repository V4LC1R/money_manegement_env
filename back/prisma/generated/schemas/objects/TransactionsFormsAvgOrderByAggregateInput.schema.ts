import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionsFormsAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    holderId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TransactionsFormsAvgOrderByAggregateInputObjectSchema = Schema;
