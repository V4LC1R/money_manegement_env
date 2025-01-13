import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { HolderOrderByRelationAggregateInputObjectSchema } from './HolderOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { FinancialTransactionOrderByRelationAggregateInputObjectSchema } from './FinancialTransactionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    holders: z
      .lazy(() => HolderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    transactionsFinancials: z
      .lazy(() => FinancialTransactionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
