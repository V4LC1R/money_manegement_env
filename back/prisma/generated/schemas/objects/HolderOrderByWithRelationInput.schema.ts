import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TransactionsFormsOrderByRelationAggregateInputObjectSchema } from './TransactionsFormsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.HolderOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    transactionsForms: z
      .lazy(() => TransactionsFormsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const HolderOrderByWithRelationInputObjectSchema = Schema;
