import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FinancialTransactionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      transactionsFormsId: z.lazy(() => SortOrderSchema).optional(),
      categoryId: z.lazy(() => SortOrderSchema).optional(),
      parcelId: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      typeId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FinancialTransactionCountOrderByAggregateInputObjectSchema =
  Schema;
