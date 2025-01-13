import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountPlanOrderByWithRelationInputObjectSchema } from './AccountPlanOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RecurrenceOrderByWithRelationInput> = z
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
    category: z
      .lazy(() => AccountPlanOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const RecurrenceOrderByWithRelationInputObjectSchema = Schema;
